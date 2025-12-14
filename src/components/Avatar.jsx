import React from 'react';

export default function Avatar({
    src,
    alt = 'User Avatar',
    size = 'md',
    className = '',
    ...props
}) {
    const sizeClasses = {
        sm: 'size-8',
        md: 'size-10',
        lg: 'size-12',
        xl: 'size-16',
    };

    return (
        <img
            src={src || 'https://api.dicebear.com/8.x/initials/svg?seed=JD'}
            alt={alt}
            className={`rounded-full object-cover ${sizeClasses[size]} ${className}`}
            {...props}
        />
    );
}
