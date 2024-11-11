import { createBoard } from '@wixc3/react-board';
import { Content } from '../../../src/components/content/content';

export default createBoard({
    name: 'Content',
    Board: () => <Content />,
});
