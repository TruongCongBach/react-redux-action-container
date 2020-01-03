import { container }            from '@fusion.io/container';
import { ChangerValueFirstKey } from './actions/classTypeActions';

container.singleton(ChangerValueFirstKey, () => new ChangerValueFirstKey());
export default container;
