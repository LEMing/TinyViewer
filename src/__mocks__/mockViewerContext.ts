
import {DEFAULT_VIEWER_OPTIONS} from '../constants';
import {IViewerContext} from '../ViewerContext';

const mockViewerContext: IViewerContext = {
  threeRoot: null,
  setIsLoading: jest.fn,
  clientSize: {
    clientHeight: 1,
    clientWidth: 1,
  },
  options: DEFAULT_VIEWER_OPTIONS
}

export default mockViewerContext;
