"use client";
import { IconProps } from "@/interfaces/UiProps";

export default function NoteIcon({ isActive = false }: IconProps) {
  const activeIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="22" height="22" rx="6" fill={"#49FF66"} />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.35095 2.17326C4.57836 2.17326 2.33073 4.42089 2.33073 7.19348V16.8065C2.33073 19.5791 4.57836 21.8267 7.35095 21.8267H16.6452C19.4178 21.8267 21.6655 19.5791 21.6655 16.8065V7.19348C21.6655 4.42089 19.4178 2.17326 16.6452 2.17326H7.35095ZM0.157471 7.19348C0.157471 3.22063 3.3781 0 7.35095 0H16.6452C20.6181 0 23.8387 3.22063 23.8387 7.19348V16.8065C23.8387 20.7794 20.6181 24 16.6452 24H7.35095C3.3781 24 0.157471 20.7794 0.157471 16.8065V7.19348Z"
        fill="#211B28"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.11914 6.61598C4.11914 6.01585 4.60564 5.52935 5.20576 5.52935H18.1222C18.7223 5.52935 19.2088 6.01585 19.2088 6.61598C19.2088 7.21611 18.7223 7.70261 18.1222 7.70261H5.20576C4.60564 7.70261 4.11914 7.21611 4.11914 6.61598Z"
        fill="#211B28"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.11914 11.6247C4.11914 11.0245 4.60564 10.538 5.20576 10.538H18.1222C18.7223 10.538 19.2088 11.0245 19.2088 11.6247C19.2088 12.2248 18.7223 12.7113 18.1222 12.7113H5.20576C4.60564 12.7113 4.11914 12.2248 4.11914 11.6247Z"
        fill="#211B28"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.11914 16.639C4.11914 16.0389 4.60564 15.5524 5.20576 15.5524H11.6603C12.2605 15.5524 12.747 16.0389 12.747 16.639C12.747 17.2391 12.2605 17.7256 11.6603 17.7256H5.20576C4.60564 17.7256 4.11914 17.2391 4.11914 16.639Z"
        fill="#211B28"
      />
    </svg>
  );
  const inactiveIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.35095 2.17326C4.57836 2.17326 2.33073 4.42089 2.33073 7.19348V16.8065C2.33073 19.5791 4.57836 21.8267 7.35095 21.8267H16.6452C19.4178 21.8267 21.6655 19.5791 21.6655 16.8065V7.19348C21.6655 4.42089 19.4178 2.17326 16.6452 2.17326H7.35095ZM0.157471 7.19348C0.157471 3.22063 3.3781 0 7.35095 0H16.6452C20.6181 0 23.8387 3.22063 23.8387 7.19348V16.8065C23.8387 20.7794 20.6181 24 16.6452 24H7.35095C3.3781 24 0.157471 20.7794 0.157471 16.8065V7.19348Z"
        fill="#211B28"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.11914 6.61598C4.11914 6.01585 4.60564 5.52935 5.20576 5.52935H18.1222C18.7223 5.52935 19.2088 6.01585 19.2088 6.61598C19.2088 7.21611 18.7223 7.70261 18.1222 7.70261H5.20576C4.60564 7.70261 4.11914 7.21611 4.11914 6.61598Z"
        fill="#211B28"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.11914 11.6247C4.11914 11.0245 4.60564 10.538 5.20576 10.538H18.1222C18.7223 10.538 19.2088 11.0245 19.2088 11.6247C19.2088 12.2248 18.7223 12.7113 18.1222 12.7113H5.20576C4.60564 12.7113 4.11914 12.2248 4.11914 11.6247Z"
        fill="#211B28"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.11914 16.639C4.11914 16.0389 4.60564 15.5524 5.20576 15.5524H11.6603C12.2605 15.5524 12.747 16.0389 12.747 16.639C12.747 17.2391 12.2605 17.7256 11.6603 17.7256H5.20576C4.60564 17.7256 4.11914 17.2391 4.11914 16.639Z"
        fill="#211B28"
      />
    </svg>
  );
  return isActive ? activeIcon : inactiveIcon;
}