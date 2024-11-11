import styles from './dash.module.scss';
import cx from 'classnames';

export interface DashProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Dash = ({ className }: DashProps) => {
    return <div className={cx(styles.root, className)}></div>;
};
