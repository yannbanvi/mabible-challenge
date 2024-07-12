"use client";
import { IconProps } from "@/interfaces/UiProps";

export default function ListesIcon({ isActive = false }: IconProps) {
  const activeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M5.33301 5.33203C5.33301 3.12289 7.12387 1.33203 9.33301 1.33203H18.6663C20.8755 1.33203 22.6663 3.12289 22.6663 5.33203V14.6654C22.6663 16.8745 20.8755 18.6654 18.6663 18.6654H9.33301C7.12387 18.6654 5.33301 16.8745 5.33301 14.6654V5.33203Z"
        fill="#49FF66"
      />
      <path
        d="M15.99 22.9313C15.99 23.231 15.8702 23.4906 15.6804 23.6904C15.4806 23.8802 15.211 24 14.9213 24H5.3633C3.94507 24 2.58677 23.4407 1.57803 22.432C1.32834 22.1823 1.10861 21.9126 0.908864 21.633C0.898876 21.633 0.908864 21.623 0.908864 21.623C0.319601 20.7541 0 19.7054 0 18.6467V9.05868C0 8.45943 0.489388 7.97004 1.08864 7.97004C1.68789 7.97004 2.17728 8.45943 2.17728 9.05868V18.6467C2.17728 19.5056 2.50687 20.3146 3.10612 20.9139C3.70537 21.5031 4.52434 21.8527 5.3633 21.8527H14.9213C15.221 21.8527 15.4806 21.9725 15.6804 22.1723C15.8702 22.372 15.99 22.6317 15.99 22.9313Z"
        fill="#211B28"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.432 1.57803C21.4232 0.569288 20.0649 0 18.6467 0H9.68788C8.26965 0 6.90136 0.569288 5.89263 1.57803C4.88389 2.58677 4.32458 3.94507 4.32458 5.37328V14.3321C4.32458 15.7603 4.89387 17.1286 5.89263 18.1273C6.89138 19.1261 8.26965 19.7054 9.68788 19.7054H18.6467C20.0649 19.7054 21.4232 19.1361 22.432 18.1273C23.4407 17.1286 24 15.7603 24 14.3321V5.37328C24 3.94507 23.4407 2.57678 22.432 1.57803ZM21.8327 5.37328V14.3321C21.8327 15.181 21.4931 16 20.8939 16.5993C20.3046 17.1985 19.4856 17.5281 18.6467 17.5281H9.68788C8.83894 17.5281 8.02995 17.1985 7.4307 16.5993C6.83145 16 6.49188 15.181 6.49188 14.3321V5.37328C6.49188 4.52434 6.83145 3.70537 7.4307 3.10612C8.02995 2.50687 8.83894 2.17728 9.68788 2.17728H18.6467C19.4856 2.17728 20.3046 2.50687 20.8939 3.10612C21.4931 3.70537 21.8327 4.52434 21.8327 5.37328Z"
        fill="#211B28"
      />
      <path
        d="M11.6255 7.21102C11.6255 6.71164 12.045 6.3421 12.5044 6.3421C12.6442 6.3421 12.784 6.37206 12.9239 6.44198L17.4882 8.89891C18.0974 9.22849 18.0974 10.0974 17.4882 10.427L12.9239 12.8839C12.794 12.9538 12.6442 12.9938 12.5044 12.9938C12.045 12.9938 11.6255 12.6342 11.6255 12.1249V7.19104V7.21102Z"
        fill="#211B28"
      />
    </svg>
  );

  const inactiveIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.99 22.9313C15.99 23.231 15.8702 23.4906 15.6804 23.6904C15.4807 23.8802 15.211 24 14.9214 24H5.3633C3.94507 24 2.58677 23.4407 1.57803 22.432C1.32834 22.1823 1.10861 21.9126 0.908864 21.633C0.898877 21.633 0.908864 21.623 0.908864 21.623C0.319601 20.7541 0 19.7054 0 18.6467V9.05868C0 8.45943 0.489388 7.97004 1.08864 7.97004C1.68789 7.97004 2.17728 8.45943 2.17728 9.05868V18.6467C2.17728 19.5056 2.50687 20.3146 3.10612 20.9139C3.70537 21.5031 4.52435 21.8527 5.3633 21.8527H14.9214C15.221 21.8527 15.4807 21.9725 15.6804 22.1723C15.8702 22.372 15.99 22.6317 15.99 22.9313Z"
        fill="#211B28"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M22.432 1.57803C21.4232 0.569288 20.0649 0 18.6467 0H9.68788C8.26966 0 6.90137 0.569288 5.89263 1.57803C4.88389 2.58677 4.32459 3.94507 4.32459 5.37328V14.3321C4.32459 15.7603 4.89388 17.1286 5.89263 18.1273C6.89138 19.1261 8.26966 19.7054 9.68788 19.7054H18.6467C20.0649 19.7054 21.4232 19.1361 22.432 18.1273C23.4407 17.1286 24 15.7603 24 14.3321V5.37328C24 3.94507 23.4407 2.57678 22.432 1.57803ZM21.8327 5.37328V14.3321C21.8327 15.181 21.4931 16 20.8939 16.5993C20.3046 17.1985 19.4856 17.5281 18.6467 17.5281H9.68788C8.83895 17.5281 8.02996 17.1985 7.43071 16.5993C6.83145 16 6.49188 15.181 6.49188 14.3321V5.37328C6.49188 4.52434 6.83145 3.70537 7.43071 3.10612C8.02996 2.50687 8.83895 2.17728 9.68788 2.17728H18.6467C19.4856 2.17728 20.3046 2.50687 20.8939 3.10612C21.4931 3.70537 21.8327 4.52434 21.8327 5.37328Z"
        fill="#211B28"
      />
      <path
        d="M11.6255 7.21102C11.6255 6.71164 12.045 6.3421 12.5044 6.3421C12.6442 6.3421 12.784 6.37206 12.9239 6.44198L17.4882 8.89891C18.0974 9.22849 18.0974 10.0974 17.4882 10.427L12.9239 12.8839C12.794 12.9538 12.6442 12.9938 12.5044 12.9938C12.045 12.9938 11.6255 12.6342 11.6255 12.1249V7.19104V7.21102Z"
        fill="#211B28"
      />
    </svg>
  );

  return isActive ? activeIcon : inactiveIcon;
}