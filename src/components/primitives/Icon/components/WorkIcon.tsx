
import * as React from 'react';
import BaseIcon, { BaseIconProps } from './BaseIcon';

const WorkIcon: React.FC<BaseIconProps> = (props: BaseIconProps) => (
    <BaseIcon {...props} width="18" height="15" viewBox="0 0 18 15" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.05556 0C7.53395 0 7.11111 0.422842 7.11111 0.944444H2.5C1.39543 0.944444 0.5 1.83987 0.5 2.94444V7.44444C0.5 8.54901 1.39543 9.44444 2.5 9.44444H15.5C16.6046 9.44444 17.5 8.54901 17.5 7.44444V2.94444C17.5 1.83987 16.6046 0.944444 15.5 0.944444H10.8889C10.8889 0.422842 10.466 0 9.94444 0H8.05556ZM3.33333 7.08333C3.33333 6.82253 3.54475 6.61111 3.80556 6.61111C4.06636 6.61111 4.27778 6.82253 4.27778 7.08333V8.02778C4.27778 8.28858 4.06636 8.5 3.80556 8.5C3.54475 8.5 3.33333 8.28858 3.33333 8.02778V7.08333ZM14.1944 6.61111C13.9336 6.61111 13.7222 6.82253 13.7222 7.08333V8.02778C13.7222 8.28858 13.9336 8.5 14.1944 8.5C14.4552 8.5 14.6667 8.28858 14.6667 8.02778V7.08333C14.6667 6.82253 14.4552 6.61111 14.1944 6.61111Z" fill="#E2B37A"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M8.05556 0C7.53395 0 7.11111 0.422842 7.11111 0.944444H2.5C1.39543 0.944444 0.5 1.83987 0.5 2.94444V7.44444C0.5 8.54901 1.39543 9.44444 2.5 9.44444H15.5C16.6046 9.44444 17.5 8.54901 17.5 7.44444V2.94444C17.5 1.83987 16.6046 0.944444 15.5 0.944444H10.8889C10.8889 0.422842 10.466 0 9.94444 0H8.05556ZM3.33333 7.08333C3.33333 6.82253 3.54475 6.61111 3.80556 6.61111C4.06636 6.61111 4.27778 6.82253 4.27778 7.08333V8.02778C4.27778 8.28858 4.06636 8.5 3.80556 8.5C3.54475 8.5 3.33333 8.28858 3.33333 8.02778V7.08333ZM14.1944 6.61111C13.9336 6.61111 13.7222 6.82253 13.7222 7.08333V8.02778C13.7222 8.28858 13.9336 8.5 14.1944 8.5C14.4552 8.5 14.6667 8.28858 14.6667 8.02778V7.08333C14.6667 6.82253 14.4552 6.61111 14.1944 6.61111Z" fill="#FDA344"/>
        <path d="M0.5 10.3889H17.5V12.1667C17.5 13.2712 16.6046 14.1667 15.5 14.1667H2.5C1.39543 14.1667 0.5 13.2712 0.5 12.1667V10.3889Z" fill="#E2B37A"/>
        <path d="M0.5 10.3889H17.5V12.1667C17.5 13.2712 16.6046 14.1667 15.5 14.1667H2.5C1.39543 14.1667 0.5 13.2712 0.5 12.1667V10.3889Z" fill="#FDA344"/></BaseIcon>
);

export default React.memo<BaseIconProps>(WorkIcon);
