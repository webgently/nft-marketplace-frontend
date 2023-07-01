import React from 'react';

interface IconProps {
  className?: string;
  fill?: string;
  size?: number;
  height?: number;
  marginLeft?: number;
  margin?: number;
  icon: string;
}

export const Icon = ({ className, fill, size, height, icon, marginLeft, margin }: IconProps) => (
  <div
    className={className}
    style={{
      display: 'flex',
      alignItems: 'center',
      color: fill,
      width: size || 16,
      height: height || size || 16,
      marginLeft: marginLeft || 0,
      marginRight: margin || 0
    }}
  >
    {icons[icon]}
  </div>
);

const icons = {
  Logo: (
    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 12.4502C6.55228 12.4502 7 12.8979 7 13.4502V26.0002H25V13.4502C25 12.8979 25.4477 12.4502 26 12.4502C26.5523 12.4502 27 12.8979 27 13.4502V26.0002C27 26.5306 26.7893 27.0393 26.4142 27.4144C26.0391 27.7895 25.5304 28.0002 25 28.0002H7C6.46957 28.0002 5.96086 27.7895 5.58579 27.4144C5.21071 27.0393 5 26.5306 5 26.0002V13.4502C5 12.8979 5.44772 12.4502 6 12.4502Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 5C3 4.44772 3.44772 4 4 4H28C28.5523 4 29 4.44772 29 5C29 5.55228 28.5523 6 28 6H4C3.44772 6 3 5.55228 3 5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 7C4.55228 7 5 7.44772 5 8V10C5 10.7956 5.31607 11.5587 5.87868 12.1213C6.44129 12.6839 7.20435 13 8 13C8.79565 13 9.55871 12.6839 10.1213 12.1213C10.6839 11.5587 11 10.7956 11 10V8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8V10C13 11.3261 12.4732 12.5979 11.5355 13.5355C10.5979 14.4732 9.32608 15 8 15C6.67392 15 5.40215 14.4732 4.46447 13.5355C3.52678 12.5979 3 11.3261 3 10V8C3 7.44772 3.44772 7 4 7Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7C12.5523 7 13 7.44772 13 8V10C13 10.7956 13.3161 11.5587 13.8787 12.1213C14.4413 12.6839 15.2044 13 16 13C16.7956 13 17.5587 12.6839 18.1213 12.1213C18.6839 11.5587 19 10.7956 19 10V8C19 7.44772 19.4477 7 20 7C20.5523 7 21 7.44772 21 8V10C21 11.3261 20.4732 12.5979 19.5355 13.5355C18.5979 14.4732 17.3261 15 16 15C14.6739 15 13.4021 14.4732 12.4645 13.5355C11.5268 12.5979 11 11.3261 11 10V8C11 7.44772 11.4477 7 12 7Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 7C20.5523 7 21 7.44772 21 8V10C21 10.7956 21.3161 11.5587 21.8787 12.1213C22.4413 12.6839 23.2044 13 24 13C24.7956 13 25.5587 12.6839 26.1213 12.1213C26.6839 11.5587 27 10.7956 27 10V8C27 7.44772 27.4477 7 28 7C28.5523 7 29 7.44772 29 8V10C29 11.3261 28.4732 12.5979 27.5355 13.5355C26.5979 14.4732 25.3261 15 24 15C22.6739 15 21.4021 14.4732 20.4645 13.5355C19.5268 12.5979 19 11.3261 19 10V8C19 7.44772 19.4477 7 20 7Z"
        fill="currentColor"
      />
    </svg>
  ),
  Hamburger: (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 6C3 5.58579 3.33579 5.25 3.75 5.25H15C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75H3.75C3.33579 6.75 3 6.41421 3 6Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 18C3 17.5858 3.33579 17.25 3.75 17.25H15C15.4142 17.25 15.75 17.5858 15.75 18C15.75 18.4142 15.4142 18.75 15 18.75H3.75C3.33579 18.75 3 18.4142 3 18Z"
        fill="currentColor"
      />
    </svg>
  ),
  User: (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 3.125C7.58375 3.125 5.625 5.08375 5.625 7.5C5.625 9.91625 7.58375 11.875 10 11.875C12.4162 11.875 14.375 9.91625 14.375 7.5C14.375 5.08375 12.4162 3.125 10 3.125ZM4.375 7.5C4.375 4.3934 6.8934 1.875 10 1.875C13.1066 1.875 15.625 4.3934 15.625 7.5C15.625 10.6066 13.1066 13.125 10 13.125C6.8934 13.125 4.375 10.6066 4.375 7.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.0001 13.124C8.57374 13.124 7.17251 13.4995 5.93728 14.2128C4.70205 14.926 3.67634 15.9518 2.96327 17.1872C2.79071 17.4861 2.40848 17.5886 2.10953 17.416C1.81058 17.2435 1.70812 16.8612 1.88068 16.5623C2.70345 15.1369 3.88696 13.9532 5.31223 13.1303C6.7375 12.3073 8.3543 11.874 10.0001 11.874C11.6459 11.874 13.2627 12.3073 14.688 13.1303C16.1132 13.9532 17.2968 15.1369 18.1195 16.5623C18.2921 16.8612 18.1896 17.2435 17.8907 17.416C17.5917 17.5886 17.2095 17.4861 17.0369 17.1872C16.3239 15.9518 15.2982 14.926 14.0629 14.2128C12.8277 13.4995 11.4265 13.124 10.0001 13.124Z"
        fill="currentColor"
      />
    </svg>
  ),
  Rocket: (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.17053 12.4494C6.28055 12.7766 6.10451 13.131 5.77734 13.241C4.71792 13.5973 4.15489 14.4866 3.85373 15.391C3.73414 15.7501 3.66189 16.0958 3.61848 16.3817C3.90434 16.3383 4.25006 16.266 4.60917 16.1464C5.51355 15.8453 6.4029 15.2823 6.75916 14.2228C6.86918 13.8957 7.2236 13.7196 7.55078 13.8296C7.87795 13.9397 8.05399 14.2941 7.94396 14.6213C7.4096 16.2103 6.08801 16.9715 5.00411 17.3324C4.45655 17.5148 3.94395 17.6048 3.5698 17.6497C3.38182 17.6722 3.22641 17.6836 3.116 17.6894C3.06074 17.6924 3.01658 17.6939 2.98505 17.6946C2.96928 17.695 2.95666 17.6952 2.94737 17.6954L2.93596 17.6955L2.93217 17.6955L2.93077 17.6955L2.93019 17.6955C2.92993 17.6955 2.92969 17.6955 2.92969 17.0705C2.30469 17.0705 2.30469 17.0702 2.30469 17.07L2.30469 17.0694L2.30469 17.068L2.30471 17.0642L2.30481 17.0528C2.30493 17.0435 2.30514 17.0309 2.30553 17.0151C2.30631 16.9836 2.30782 16.9394 2.31072 16.8842C2.31653 16.7738 2.32797 16.6184 2.35052 16.4304C2.3954 16.0562 2.48542 15.5436 2.66776 14.9961C3.0287 13.9122 3.78989 12.5906 5.37891 12.0562C5.70608 11.9462 6.0605 12.1222 6.17053 12.4494ZM2.92969 17.0705H2.30469C2.30469 17.4157 2.58451 17.6955 2.92969 17.6955V17.0705Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5462 3.45406C15.8208 3.34943 14.0351 3.31002 12.2076 5.13753L7.34482 10.0003L10 12.6555L14.8627 7.79271C16.6903 5.9652 16.6508 4.17951 16.5462 3.45406ZM16.7275 2.21727C15.7298 2.07282 13.5058 2.07157 11.3237 4.25365L6.019 9.55834C5.90179 9.67555 5.83594 9.83452 5.83594 10.0003C5.83594 10.166 5.90179 10.325 6.019 10.4422L9.55806 13.9813C9.80214 14.2254 10.1979 14.2254 10.4419 13.9813L15.7466 8.67659C17.9287 6.49452 17.9275 4.27052 17.783 3.27282C17.7465 3.0058 17.6235 2.75803 17.4329 2.5674C17.2422 2.37678 16.9945 2.25382 16.7275 2.21727Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.422 8.49219C14.7672 8.49219 15.047 8.77201 15.047 9.11719V14.1641L15.0469 14.173C15.0423 14.5013 14.9086 14.8145 14.675 15.045L12.1527 17.575C11.9926 17.7349 11.7921 17.8484 11.5725 17.9033C11.353 17.9582 11.1227 17.9524 10.9061 17.8867C10.6896 17.8209 10.495 17.6976 10.343 17.5299C10.1912 17.3623 10.0877 17.1567 10.0435 16.9349C10.0434 16.9347 10.0435 16.9351 10.0435 16.9349L9.38731 13.6619C9.31946 13.3235 9.53882 12.9941 9.87727 12.9263C10.2157 12.8584 10.5451 13.0778 10.6129 13.4162L11.2694 16.6906L13.797 14.1552V9.11719C13.797 8.77201 14.0768 8.49219 14.422 8.49219Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.82722 4.95319L5.83612 4.95312H10.883C11.2282 4.95312 11.508 5.23295 11.508 5.57812C11.508 5.9233 11.2282 6.20312 10.883 6.20312H5.84496L5.83991 6.20828L5.83988 6.20825L3.30957 8.73075L3.31054 8.73094L6.58398 9.38719C6.92242 9.45504 7.14178 9.78441 7.07393 10.1229C7.00608 10.4613 6.67671 10.6807 6.33827 10.6128L3.0658 9.95675C3.06562 9.95671 3.06543 9.95668 3.06524 9.95664C2.84349 9.91244 2.63788 9.80892 2.47031 9.65711C2.3026 9.50516 2.17928 9.31054 2.11351 9.094C2.04775 8.87746 2.042 8.64712 2.09689 8.42757C2.15178 8.20802 2.26525 8.00749 2.42518 7.84738L2.42612 7.84644L2.42612 7.84644L4.95522 5.32514C5.18573 5.09151 5.49894 4.95786 5.82722 4.95319Z"
        fill="currentColor"
      />
    </svg>
  ),
  Setting: (
    <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.8108 10.8985C15.8475 10.6052 15.875 10.3118 15.875 10.0002C15.875 9.6885 15.8475 9.39516 15.8108 9.10183L17.745 7.58933C17.9191 7.45183 17.965 7.20433 17.855 7.00266L16.0216 3.831C15.9116 3.62933 15.6641 3.556 15.4625 3.62933L13.18 4.546C12.7033 4.17933 12.19 3.87683 11.6308 3.64766L11.2825 1.2185C11.255 0.998496 11.0625 0.833496 10.8333 0.833496H7.16664C6.93747 0.833496 6.74498 0.998496 6.71747 1.2185L6.36914 3.64766C5.80998 3.87683 5.29664 4.1885 4.81997 4.546L2.53747 3.62933C2.32664 3.54683 2.08831 3.62933 1.97831 3.831L0.144975 7.00266C0.0258082 7.20433 0.0808083 7.45183 0.254975 7.58933L2.18914 9.10183C2.15248 9.39516 2.12497 9.69766 2.12497 10.0002C2.12497 10.3027 2.15248 10.6052 2.18914 10.8985L0.254975 12.411C0.0808083 12.5485 0.0349748 12.796 0.144975 12.9977L1.97831 16.1693C2.08831 16.371 2.33581 16.4443 2.53747 16.371L4.81997 15.4543C5.29664 15.821 5.80998 16.1235 6.36914 16.3527L6.71747 18.7818C6.74498 19.0018 6.93747 19.1668 7.16664 19.1668H10.8333C11.0625 19.1668 11.255 19.0018 11.2825 18.7818L11.6308 16.3527C12.19 16.1235 12.7033 15.8118 13.18 15.4543L15.4625 16.371C15.6733 16.4535 15.9116 16.371 16.0216 16.1693L17.855 12.9977C17.965 12.796 17.9191 12.5485 17.745 12.411L15.8108 10.8985ZM8.99998 13.2085C7.23081 13.2085 5.79164 11.7693 5.79164 10.0002C5.79164 8.231 7.23081 6.79183 8.99998 6.79183C10.7691 6.79183 12.2083 8.231 12.2083 10.0002C12.2083 11.7693 10.7691 13.2085 8.99998 13.2085Z"
        fill="currentColor"
      />
    </svg>
  ),
  SignOut: (
    <svg viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 11C12.4 11 12 11.4 12 12V13C12 13.6 11.6 14 11 14H10V5.4C10 4.1 9.2 3 8.1 2.6L6.5 2H11C11.6 2 12 2.4 12 3V4C12 4.6 12.4 5 13 5C13.6 5 14 4.6 14 4V3C14 1.3 12.7 0 11 0H1C0.9 0 0.8 -9.68575e-08 0.7 0.0999999C0.6 0.0999999 0.5 0.2 0.5 0.2L0.4 0.3C0.3 0.3 0.2 0.4 0.2 0.5V0.6C0.0999998 0.6 0 0.7 0 0.8V15C0 15.4 0.3 15.8 0.6 15.9L7.2 18.4C7.4 18.5 7.7 18.5 7.9 18.5C8.3 18.5 8.7 18.4 9 18.1C9.5 17.7 9.9 17.1 9.9 16.5V16H10.9C12.6 16 13.9 14.7 13.9 13V12C14 11.5 13.6 11 13 11ZM2 14.3V2.4L7.3 4.4C7.7 4.6 8 5 8 5.4V16.5L2 14.3Z"
        fill="currentColor"
      />
    </svg>
  ),
  Discord: (
    <svg viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.293 19.5C13.1214 19.5 13.793 18.8284 13.793 18C13.793 17.1716 13.1214 16.5 12.293 16.5C11.4645 16.5 10.793 17.1716 10.793 18C10.793 18.8284 11.4645 19.5 12.293 19.5Z"
        fill="currentColor"
      />
      <path
        d="M20.293 19.5C21.1214 19.5 21.793 18.8284 21.793 18C21.793 17.1716 21.1214 16.5 20.293 16.5C19.4645 16.5 18.793 17.1716 18.793 18C18.793 18.8284 19.4645 19.5 20.293 19.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2856 10.0006C14.1178 9.98454 11.9608 10.3065 9.89211 10.9548C9.3651 11.12 8.80398 10.8267 8.63881 10.2997C8.47364 9.77266 8.76697 9.21154 9.29397 9.04637C11.5586 8.33661 13.9199 7.98379 16.293 8.00057C18.6662 7.98379 21.0275 8.33661 23.2921 9.04637C23.8191 9.21154 24.1124 9.77266 23.9473 10.2997C23.7821 10.8267 23.221 11.12 22.694 10.9548C20.6253 10.3065 18.4683 9.98454 16.3004 10.0006H16.2856Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.63881 21.7012C8.80398 21.1742 9.3651 20.8809 9.89211 21.046C11.9608 21.6944 14.1178 22.0163 16.2856 22.0003H16.3004C18.4683 22.0163 20.6253 21.6944 22.694 21.046C23.221 20.8809 23.7821 21.1742 23.9473 21.7012C24.1124 22.2282 23.8191 22.7893 23.2921 22.9545C21.0275 23.6643 18.6662 24.0171 16.293 24.0003C13.9199 24.0171 11.5586 23.6643 9.29397 22.9545C8.76697 22.7893 8.47364 22.2282 8.63881 21.7012Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5124 4.81024C20.9429 4.56754 21.4476 4.4917 21.9303 4.59714C23.2479 4.88268 24.5378 5.28326 25.7853 5.79426C26.0661 5.90254 26.3183 6.07398 26.5224 6.29541C26.7286 6.5192 26.88 6.78788 26.9645 7.08017L31.2003 21.2246C31.3108 21.593 31.3134 21.9855 31.2077 22.3554C31.102 22.7253 30.8925 23.0571 30.604 23.3116L30.5989 23.3161C28.5314 25.1151 25.73 26.4767 22.5481 27.2567C22.1061 27.3694 21.6387 27.3256 21.2252 27.1326C20.8134 26.9404 20.4806 26.6122 20.2828 26.2035L18.7745 23.2119C18.5259 22.7188 18.7241 22.1174 19.2173 21.8688C19.7104 21.6202 20.3118 21.8184 20.5604 22.3115L22.0729 25.3115L22.074 25.3137C25.0119 24.5933 27.506 23.3562 29.286 21.8073L29.9425 22.5617L29.2809 21.8119C29.2827 21.8103 29.284 21.8082 29.2846 21.8059C29.2853 21.8036 29.2853 21.8012 29.2846 21.7989L25.0485 7.65368C25.045 7.65227 25.0414 7.65084 25.0379 7.64939C23.895 7.18051 22.713 6.81314 21.5057 6.55155L21.5035 6.55107C21.5005 6.55042 21.4974 6.55089 21.4947 6.5524C21.4923 6.55375 21.4904 6.55587 21.4893 6.5584L20.5044 9.53807C20.3311 10.0625 19.7655 10.347 19.2411 10.1737C18.7167 10.0004 18.4322 9.43476 18.6055 8.91038L19.5959 5.91419C19.7554 5.44609 20.0817 5.05312 20.5124 4.81024Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0912 6.5524C11.0885 6.55089 11.0854 6.55042 11.0824 6.55107L11.0802 6.55155C9.87285 6.81314 8.69089 7.18051 7.54798 7.64939C7.54446 7.65084 7.54092 7.65227 7.53737 7.65368L3.30139 21.7986C3.30071 21.8009 3.30061 21.8036 3.30126 21.8059C3.30185 21.808 3.30297 21.8099 3.30449 21.8114C5.08418 23.3583 7.57657 24.5939 10.5119 25.3137L10.513 25.3115L12.0255 22.3115C12.2741 21.8184 12.8755 21.6202 13.3686 21.8688C13.8618 22.1174 14.06 22.7188 13.8114 23.2119L12.3031 26.2035C12.1052 26.6122 11.7724 26.9404 11.3607 27.1326C10.9472 27.3256 10.4798 27.3694 10.0378 27.2567C6.85584 26.4767 4.05447 25.1151 1.98701 23.3161L1.98183 23.3116C1.69336 23.0571 1.4839 22.7252 1.37821 22.3554C1.27256 21.9856 1.27508 21.5932 1.38546 21.2248C1.38543 21.2249 1.38549 21.2248 1.38546 21.2248L5.62136 7.08019C5.70588 6.78789 5.85723 6.51921 6.06348 6.29541C6.26754 6.07398 6.51976 5.90254 6.80056 5.79426C8.04843 5.28312 9.33874 4.88246 10.6567 4.5969C11.1391 4.49181 11.6433 4.56772 12.0735 4.81024C12.5042 5.05312 12.8305 5.4461 12.99 5.9142L12.9929 5.92287L13.9804 8.91038C14.1537 9.43476 13.8692 10.0004 13.3448 10.1737C12.8204 10.347 12.2548 10.0624 12.0815 9.53807L11.0965 6.55839C11.0955 6.55586 11.0936 6.55375 11.0912 6.5524Z"
        fill="currentColor"
      />
      <path
        d="M12.293 19.5C13.1214 19.5 13.793 18.8284 13.793 18C13.793 17.1716 13.1214 16.5 12.293 16.5C11.4645 16.5 10.793 17.1716 10.793 18C10.793 18.8284 11.4645 19.5 12.293 19.5Z"
        fill="currentColor"
      />
      <path
        d="M20.293 19.5C21.1214 19.5 21.793 18.8284 21.793 18C21.793 17.1716 21.1214 16.5 20.293 16.5C19.4645 16.5 18.793 17.1716 18.793 18C18.793 18.8284 19.4645 19.5 20.293 19.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2856 10.0006C14.1178 9.98454 11.9608 10.3065 9.89211 10.9548C9.3651 11.12 8.80398 10.8267 8.63881 10.2997C8.47364 9.77266 8.76697 9.21154 9.29397 9.04637C11.5586 8.33661 13.9199 7.98379 16.293 8.00057C18.6662 7.98379 21.0275 8.33661 23.2921 9.04637C23.8191 9.21154 24.1124 9.77266 23.9473 10.2997C23.7821 10.8267 23.221 11.12 22.694 10.9548C20.6253 10.3065 18.4683 9.98454 16.3004 10.0006H16.2856Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.63881 21.7012C8.80398 21.1742 9.3651 20.8809 9.89211 21.046C11.9608 21.6944 14.1178 22.0163 16.2856 22.0003H16.3004C18.4683 22.0163 20.6253 21.6944 22.694 21.046C23.221 20.8809 23.7821 21.1742 23.9473 21.7012C24.1124 22.2282 23.8191 22.7893 23.2921 22.9545C21.0275 23.6643 18.6662 24.0171 16.293 24.0003C13.9199 24.0171 11.5586 23.6643 9.29397 22.9545C8.76697 22.7893 8.47364 22.2282 8.63881 21.7012Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5124 4.81024C20.9429 4.56754 21.4476 4.4917 21.9303 4.59714C23.2479 4.88268 24.5378 5.28326 25.7853 5.79426C26.0661 5.90254 26.3183 6.07398 26.5224 6.29541C26.7286 6.5192 26.88 6.78788 26.9645 7.08017L31.2003 21.2246C31.3108 21.593 31.3134 21.9855 31.2077 22.3554C31.102 22.7253 30.8925 23.0571 30.604 23.3116L30.5989 23.3161C28.5314 25.1151 25.73 26.4767 22.5481 27.2567C22.1061 27.3694 21.6387 27.3256 21.2252 27.1326C20.8134 26.9404 20.4806 26.6122 20.2828 26.2035L18.7745 23.2119C18.5259 22.7188 18.7241 22.1174 19.2173 21.8688C19.7104 21.6202 20.3118 21.8184 20.5604 22.3115L22.0729 25.3115L22.074 25.3137C25.0119 24.5933 27.506 23.3562 29.286 21.8073L29.9425 22.5617L29.2809 21.8119C29.2827 21.8103 29.284 21.8082 29.2846 21.8059C29.2853 21.8036 29.2853 21.8012 29.2846 21.7989L25.0485 7.65368C25.045 7.65227 25.0414 7.65084 25.0379 7.64939C23.895 7.18051 22.713 6.81314 21.5057 6.55155L21.5035 6.55107C21.5005 6.55042 21.4974 6.55089 21.4947 6.5524C21.4923 6.55375 21.4904 6.55587 21.4893 6.5584L20.5044 9.53807C20.3311 10.0625 19.7655 10.347 19.2411 10.1737C18.7167 10.0004 18.4322 9.43476 18.6055 8.91038L19.5959 5.91419C19.7554 5.44609 20.0817 5.05312 20.5124 4.81024Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0912 6.5524C11.0885 6.55089 11.0854 6.55042 11.0824 6.55107L11.0802 6.55155C9.87285 6.81314 8.69089 7.18051 7.54798 7.64939C7.54446 7.65084 7.54092 7.65227 7.53737 7.65368L3.30139 21.7986C3.30071 21.8009 3.30061 21.8036 3.30126 21.8059C3.30185 21.808 3.30297 21.8099 3.30449 21.8114C5.08418 23.3583 7.57657 24.5939 10.5119 25.3137L10.513 25.3115L12.0255 22.3115C12.2741 21.8184 12.8755 21.6202 13.3686 21.8688C13.8618 22.1174 14.06 22.7188 13.8114 23.2119L12.3031 26.2035C12.1052 26.6122 11.7724 26.9404 11.3607 27.1326C10.9472 27.3256 10.4798 27.3694 10.0378 27.2567C6.85584 26.4767 4.05447 25.1151 1.98701 23.3161L1.98183 23.3116C1.69336 23.0571 1.4839 22.7252 1.37821 22.3554C1.27256 21.9856 1.27508 21.5932 1.38546 21.2248C1.38543 21.2249 1.38549 21.2248 1.38546 21.2248L5.62136 7.08019C5.70588 6.78789 5.85723 6.51921 6.06348 6.29541C6.26754 6.07398 6.51976 5.90254 6.80056 5.79426C8.04843 5.28312 9.33874 4.88246 10.6567 4.5969C11.1391 4.49181 11.6433 4.56772 12.0735 4.81024C12.5042 5.05312 12.8305 5.4461 12.99 5.9142L12.9929 5.92287L13.9804 8.91038C14.1537 9.43476 13.8692 10.0004 13.3448 10.1737C12.8204 10.347 12.2548 10.0624 12.0815 9.53807L11.0965 6.55839C11.0955 6.55586 11.0936 6.55375 11.0912 6.5524Z"
        fill="currentColor"
      />
    </svg>
  ),
  Youtube: (
    <svg viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8211 11.1183C14.1463 10.9443 14.5408 10.9634 14.8477 11.168L20.8477 15.168C21.1259 15.3534 21.293 15.6656 21.293 16C21.293 16.3344 21.1259 16.6466 20.8477 16.8321L14.8477 20.8321C14.5408 21.0366 14.1463 21.0557 13.8211 20.8817C13.496 20.7077 13.293 20.3688 13.293 20V12C13.293 11.6312 13.496 11.2923 13.8211 11.1183ZM15.293 13.8685V18.1315L18.4902 16L15.293 13.8685Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2915 5.05082L16.2746 5.05078L16.2118 5.05081C16.1573 5.05093 16.0779 5.05133 15.9761 5.05241C15.7724 5.05457 15.4786 5.05947 15.1136 5.07043C14.3841 5.09232 13.3675 5.13847 12.2167 5.23563C9.9403 5.42782 7.04225 5.82669 4.81105 6.6792L4.79635 6.68495C4.35808 6.86039 3.96717 7.13637 3.65515 7.49064C3.34313 7.84491 3.11874 8.26755 3.00008 8.72447L2.99911 8.72824C2.6877 9.9468 2.29297 12.2065 2.29297 16.0008C2.29297 19.7952 2.6877 22.0549 2.99911 23.2734L3.00008 23.2772C3.11874 23.7341 3.34313 24.1568 3.65515 24.511C3.96717 24.8653 4.35807 25.1413 4.79635 25.3167L4.81105 25.3225C7.04225 26.175 9.9403 26.5739 12.2167 26.766C13.3675 26.8632 14.3841 26.9094 15.1136 26.9312C15.4786 26.9422 15.7724 26.9471 15.9761 26.9493C16.0779 26.9504 16.1573 26.9507 16.2118 26.9509L16.2746 26.9509L16.2915 26.9509H16.2945L16.3113 26.9509L16.3741 26.9509C16.4286 26.9507 16.508 26.9504 16.6099 26.9493C16.8135 26.9471 17.1074 26.9422 17.4724 26.9312C18.2018 26.9094 19.2184 26.8632 20.3693 26.766C22.6456 26.5739 25.5437 26.175 27.7749 25.3225L27.7896 25.3167C28.2279 25.1413 28.6188 24.8653 28.9308 24.511C29.2428 24.1568 29.4672 23.7341 29.5859 23.2772L29.5868 23.2734C29.8982 22.0549 30.293 19.7952 30.293 16.0008C30.293 12.2065 29.8982 9.9468 29.5868 8.72824L29.5859 8.72447C29.4672 8.26755 29.2428 7.84491 28.9308 7.49064C28.6188 7.13637 28.2279 6.86039 27.7896 6.68495L27.7749 6.6792C25.5437 5.82669 22.6456 5.42782 20.3693 5.23563C19.2184 5.13847 18.2018 5.09232 17.4724 5.07043C17.1074 5.05947 16.8135 5.05457 16.6099 5.05241C16.508 5.05133 16.4286 5.05093 16.3741 5.05081L16.3113 5.05078L16.2945 5.05082H16.2915ZM16.2877 24.9509L16.2984 24.9508L16.3016 24.9509L16.3147 24.9509L16.3697 24.9509C16.4188 24.9508 16.4926 24.9504 16.5886 24.9494C16.7807 24.9473 17.0616 24.9427 17.4124 24.9321C18.1146 24.9111 19.0941 24.8666 20.201 24.7731C22.4371 24.5843 25.0971 24.2028 27.0526 23.4574C27.1974 23.3984 27.3265 23.3066 27.4299 23.1892C27.5344 23.0705 27.6097 22.929 27.6497 22.7761C27.9132 21.7438 28.293 19.6539 28.293 16.0008C28.293 12.3478 27.9132 10.2578 27.6497 9.22562C27.6097 9.07265 27.5344 8.93117 27.4299 8.81251C27.3265 8.69512 27.1974 8.60331 27.0526 8.54424C25.0971 7.79889 22.4371 7.41733 20.201 7.22854C19.0941 7.13509 18.1146 7.09061 17.4124 7.06953C17.0616 7.059 16.7807 7.05433 16.5886 7.0523C16.4926 7.05128 16.4188 7.05092 16.3697 7.05081L16.3147 7.05078L16.3016 7.05081L16.2987 7.05082L16.2876 7.05088L16.2844 7.05081L16.2713 7.05078L16.2163 7.05081C16.1671 7.05092 16.0933 7.05128 15.9973 7.0523C15.8052 7.05433 15.5244 7.059 15.1736 7.06953C14.4713 7.09061 13.4918 7.13509 12.3849 7.22854C10.1489 7.41733 7.48887 7.79889 5.53336 8.54424C5.38858 8.60331 5.25942 8.69513 5.15603 8.81251C5.05152 8.93117 4.97626 9.07265 4.93627 9.22562C4.6727 10.2578 4.29297 12.3478 4.29297 16.0008C4.29297 19.6539 4.6727 21.7438 4.93627 22.7761C4.97626 22.929 5.05152 23.0705 5.15603 23.1892C5.25942 23.3066 5.38857 23.3984 5.53335 23.4574C7.48886 24.2028 10.1489 24.5843 12.3849 24.7731C13.4918 24.8666 14.4713 24.9111 15.1736 24.9321C15.5244 24.9427 15.8052 24.9473 15.9973 24.9494C16.0933 24.9504 16.1671 24.9508 16.2163 24.9509L16.2713 24.9509L16.2844 24.9509L16.2877 24.9509Z"
        fill="currentColor"
      />
    </svg>
  ),
  Twitter: (
    <svg viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16.2927 11.0005C16.2927 8.25045 18.6052 5.96295 21.3552 6.00045C22.3182 6.01157 23.2576 6.3006 24.0603 6.8328C24.863 7.365 25.495 8.11771 25.8802 9.00045H30.2927L26.2552 13.038C25.9946 17.0937 24.1993 20.8979 21.2342 23.6773C18.269 26.4566 14.3567 28.0025 10.2927 28.0005C6.29267 28.0005 5.29267 26.5005 5.29267 26.5005C5.29267 26.5005 9.29267 25.0005 11.2927 22.0005C11.2927 22.0005 3.29267 18.0005 5.29267 7.00045C5.29267 7.00045 10.2927 12.0005 16.2927 13.0005V11.0005Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Instagram: (
    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.293 12C14.0838 12 12.293 13.7909 12.293 16C12.293 18.2091 14.0838 20 16.293 20C18.5021 20 20.293 18.2091 20.293 16C20.293 13.7909 18.5021 12 16.293 12ZM10.293 16C10.293 12.6863 12.9793 10 16.293 10C19.6067 10 22.293 12.6863 22.293 16C22.293 19.3137 19.6067 22 16.293 22C12.9793 22 10.293 19.3137 10.293 16Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.793 5.5C8.03154 5.5 5.79297 7.73858 5.79297 10.5V21.5C5.79297 24.2614 8.03154 26.5 10.793 26.5H21.793C24.5544 26.5 26.793 24.2614 26.793 21.5V10.5C26.793 7.73858 24.5544 5.5 21.793 5.5H10.793ZM3.79297 10.5C3.79297 6.63401 6.92698 3.5 10.793 3.5H21.793C25.659 3.5 28.793 6.63401 28.793 10.5V21.5C28.793 25.366 25.659 28.5 21.793 28.5H10.793C6.92698 28.5 3.79297 25.366 3.79297 21.5V10.5Z"
        fill="currentColor"
      />
      <path
        d="M22.793 11C23.6214 11 24.293 10.3284 24.293 9.5C24.293 8.67157 23.6214 8 22.793 8C21.9645 8 21.293 8.67157 21.293 9.5C21.293 10.3284 21.9645 11 22.793 11Z"
        fill="currentColor"
      />
    </svg>
  )
} as { [key: string]: JSX.Element };

export default Icon;
