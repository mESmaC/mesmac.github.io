import styles from './content.module.scss';
import cx from 'classnames';

export interface ContentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Content = ({ className }: ContentProps) => {
    return <div className={cx(styles.root, className)}></div>;
};
