import { container }            from '@fusion.io/container';
import { ChangerValueFirstKey } from './actions';

container.singleton(ChangerValueFirstKey, () => new ChangerValueFirstKey());
export default container;
