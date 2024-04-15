import styles from './styles.module.css';

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;

    /**
     * Consumer override classname
     */
    className?: string;

    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

export function Button(props: ButtonProps) {
    const { className, size = 'medium', ...restProps } = props;
    return (
        <button
            {...restProps}
            className={`${className} ${styles.button}`}
            data-size={size}
        />
    );
}
