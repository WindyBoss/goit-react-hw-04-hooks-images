import { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import LazyLoad from 'react-lazyload';

import { ApiService } from '../ApiService/ApiService';
import { withApiState } from './ApiState';

import Searchbar from './Searchbar';
import GalleryRender from './ImageGallery/GalleryRender';
import Modal from './Modal';
import LoadMoreBtn from './LoadMoreButton';
import Loader from './Loader';
import ErrorContainer from './ErrorContainer';

import { useModal } from 'Hooks/useModal';

import { GalleryContainer, CommunicationContainer, Image } from './App.styled';

const notify = (message) => toast(message,
  {
    style: {
      borderRadius: '10px',
      background: '#3f51b5',
      color: '#fff',
      duration: 5000,
      fontSize: '20px',
      padding: '10px 20px 10px 20px',
      maxWidth: '100%',
    },
  });

function App ({ apiState }) {
  const [openModal, toggleModal] = useModal();

  const [keyword, setKeyword] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [endRow, setEndRow] = useState(false);
  const [error, setError] = useState();
  const [clickedImg, setClickedImg] = useState({});
  const [perPage, setPerPage] = useState(0);

  useEffect(() => {
    const makeSearch = async () => {
    if (keyword === '' || keyword.trim() === '') {
      notify('Text Something');
      return;
    };
    apiState.pending();
    try {
      const response = await ApiService(keyword, page, perPage);
      if (response.hits.length === 0) {
        notify('Text valid search')
        throw new Error('No search on your request');
      };  
      if (response.hits.length < 20 && response.hits.length > 0) {
        setEndRow(true);
        notify('Sorry, You have reached the limit of pictures');
      }; 
      if(page > 1) {
        setImages(prevImg => [...prevImg, ...response.hits]);
      } else {
        setImages(response.hits);
      };
      apiState.success();
    } catch (error) {
      setError(error.message)
      apiState.error();
    };
  };
  makeSearch();
  },[apiState, keyword, page, perPage])

  const onLoadMoreClick = () => {
    setPage(prevP => prevP + 1)
  };

  const makeNewSearch = (searchQuery) => {
    setKeyword(searchQuery);
    setPage(1);
    setEndRow(false);
  }

  const findClickedImg = (id) => {
    if(images.length > 0 && id) {
      const clickedImg = images.filter((img => img.id === id))[0];
      setClickedImg(clickedImg);
    };
    toggleModal();
  };

  return (
    <>
      <Searchbar onClick={makeNewSearch} pictureToLoad={perPage} onSelect={setPerPage}/>
      { openModal && (
        <Modal onClick={toggleModal}>
          <LazyLoad>
            <Image src={clickedImg.largeImageURL} alt={clickedImg.tags} />
          </LazyLoad>
        </Modal>
      )}

      { apiState.isIdle() && <CommunicationContainer>Text the tags to find gallery</CommunicationContainer> }
      { apiState.isError() && <CommunicationContainer><ErrorContainer errorMessage={error}/></CommunicationContainer> }
      { ( apiState.isPending() && page === 1 )  && <Loader height='400px' width='400px' color='#3f51b5'/> }
      { ( apiState.isSuccess() || (apiState.isPending() && page > 1)) && ( 
        <GalleryContainer>
          <GalleryRender images={images} onClick={findClickedImg} page={page - 1}/>
          { !endRow && <LoadMoreBtn onClick={onLoadMoreClick} condition={apiState.isPending} loading={'loading'} /> }
        </GalleryContainer>)}
      <Toaster position="bottom-left" reverseOrder={false}/>
    </>
  );
};

export const AppWrap = withApiState(App);