import { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import { ApiService } from '../ApiService/ApiService';
import { withApiState } from './ApiState';

import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import LoadMoreBtn from './LoadMoreButton';
import Loader from './Loader';
import ErrorContainer from './ErrorContainer';

import { GalleryContainer, CommunicationContainer } from './App.styled';


const notify = (message) => toast(message,
  {
    style: {
      borderRadius: '10px',
      background: '#3f51b5',
      color: '#fff',
      position: "bottom-right",
    },
  });

const INITIAL_VALUE = {
  keyword: '',
  response: {},
  page: 1,
  endRow: false,
};

class App extends Component {

  state = INITIAL_VALUE;


  makeSearch = async (searchKeyword) => {
    const { keyword  } = this.state;
    const { apiState } = this.props;
    const { page } = INITIAL_VALUE;

    this.setState({ page: page });

    if (keyword === searchKeyword) {
        return;
    };

    apiState.pending();

    try {
      this.getError(searchKeyword.trim() === '');
      const response = await ApiService(searchKeyword, page);
      this.getError(response.hits.length === 0);

      if (response.hits.length < 20) {
        this.setState({response: response, keyword: searchKeyword, page: page + 1, endRow: true});
        notify('Sorry, You have reached the limit of pictures');
      } else {
        this.setState({response: response, keyword: searchKeyword, page: page + 1, endRow: false});
      };

      apiState.success();

    } catch (error) {
      apiState.error();
    };
  };

  onLoadMoreClick = async () => {
    const { page, keyword } = this.state;
    const { apiState } = this.props;
    apiState.pending();

    try {
      const response = await ApiService(keyword, page);

      if (response.hits.length < 20) {
        this.setState({ endRow: true, response: response, page: page + 1 });
        notify('Sorry, You have reached the limit of pictures');
      } else {
        this.setState({ response: response, page: page + 1 })
      };

      apiState.success();

    } catch (error) {
      apiState.error();
    };
  };

  getError(error) {
      if (error) {
        throw new Error();
      };
  };

  render() {
    const { response, page, endRow } = this.state;
    const { apiState } = this.props;

    const loadFirstTime = apiState.isPending() && page === 1;
    const loadedPages = apiState.isPending() && page > 1;
    
    return (

      <>
        <Searchbar onClick={this.makeSearch} />

        {
          apiState.isIdle() &&
          <CommunicationContainer>
            Text the tags to find gallery
          </CommunicationContainer>
        }

        <Loader condition={loadFirstTime} />

        {(
          apiState.isSuccess() || loadedPages) && (
            <GalleryContainer>
              <ImageGallery response={response} pageNumber={page - 1} />
              {!endRow && (
                <LoadMoreBtn onClick={this.onLoadMoreClick} condition={apiState.isPending} loading={'loading'} />
              )}
            </GalleryContainer>
          )}

        {
          apiState.isError() &&
          <CommunicationContainer>
            <ErrorContainer />
          </CommunicationContainer>
        }

        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </>
    );
  };
};

export const AppWrap = withApiState(App);
