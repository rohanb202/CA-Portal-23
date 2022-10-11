import React from 'react'
import './Login.css'
import Icon from "../../img/Group 252.jpg";

function Login() {
  return (
    
     <div className="auth-card">
          <div className="image-part">
          <img src={Icon} alt="" />
  </div>
  {/*Right  */}
  <div className="main-part">
    <div className="heading">
      <svg
        width={256}
        height={114}
        viewBox="0 0 856 214"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_181_3)">
          <path
            d="M479.541 52.7997C504.727 52.7997 529.914 52.7997 555.1 52.7997C556.247 52.7997 557.405 52.7444 558.553 52.7776C561.344 52.844 561.995 51.8146 560.538 49.3241C557.218 43.6348 554.945 37.5691 553.864 31.0164C552.275 21.3976 555.232 13.8708 563.44 8.50249C577.627 -0.784208 592.741 -2.18994 608.517 3.53261C619.483 7.5063 623.851 18.7632 619.747 31.3706C617.662 37.7905 614.187 43.4466 610.381 48.9367C608.307 51.9253 608.671 52.6447 612.213 52.7333C616.041 52.844 619.88 52.7776 623.719 52.7776C681.505 52.7886 739.291 52.8329 797.077 52.7997C810.194 52.7997 822.748 55.1131 834.464 61.2562C838.899 63.5807 843.08 66.2815 846.798 69.6685C855.712 77.7709 858.084 87.6663 853.836 98.9897C851.2 106.04 847.184 112.294 842.374 117.995C809.168 157.3 769.629 187.839 721.43 206.722C698.163 215.843 675.901 215.256 653.119 204.818C636.284 197.103 619.681 188.768 602.295 182.26C591.969 178.397 581.389 175.475 570.556 173.505C563.661 172.254 557.119 174.423 550.532 175.895C535.198 179.327 519.896 182.946 504.562 186.4C502.466 186.876 500.259 186.92 498.097 187.064C497.259 187.119 496.067 187.219 495.891 186.079C495.714 184.939 496.862 184.706 497.689 184.463C503.084 182.858 508.467 181.231 513.884 179.736C531.612 174.844 549.231 169.575 567.312 165.945C583.529 162.69 598.842 165.247 613.9 170.926C628.904 176.571 642.584 185.005 656.992 191.923C661.835 194.248 666.667 196.594 671.444 199.051C685.333 206.202 699.443 206.036 713.74 200.49C759.016 182.946 795.51 153.525 826.3 116.467C831.816 109.837 836.207 102.465 838.723 94.0862C840.918 86.7919 839.395 80.2724 834.177 74.893C825.925 66.4032 816.294 61.5772 803.916 63.5032C796.746 64.6212 789.409 64.754 782.15 65.2521C777.097 65.6063 776.59 65.9051 776.402 70.8086C775.785 86.8251 775.321 102.842 774.67 118.858C774.461 123.95 775.575 128.41 778.841 132.451C781.466 135.705 780.705 137.553 776.744 138.848C767.963 141.726 759.446 135.627 758.387 125.688C757.383 116.334 758.233 106.981 758.63 97.6282C759.005 88.6625 759.667 79.719 760.185 70.7533C760.296 68.9048 760.439 66.9788 757.813 66.7906C755.21 66.6025 754.162 67.9529 754.085 70.4876C753.787 79.8407 753.39 89.1938 753.048 98.5469C752.805 105.21 752.573 111.874 752.353 118.537C752.176 123.806 753.158 128.632 756.677 132.871C759.137 135.849 758.442 137.432 754.725 138.704C747.642 141.14 739.798 137.432 737.184 130.37C735.363 125.455 735.485 120.297 735.441 115.172C735.43 114.076 735.893 112.571 734.768 111.984C733.554 111.365 732.727 112.737 731.932 113.468C725.721 119.179 718.319 122.965 710.872 126.662C710.42 126.894 709.945 127.104 709.46 127.27C707.154 128.023 704.992 127.625 703.635 125.61C702.19 123.463 704.01 122.002 705.411 120.762C713.211 113.921 721.044 107.136 728.898 100.373C734.028 95.9568 734.061 95.99 729.682 90.998C729.009 90.2232 728.303 89.4816 727.575 88.7621C720.404 81.6117 718.672 81.5674 710.949 88.1312C710.089 88.8618 709.151 89.6366 708.114 90.024C706.492 90.6328 704.782 90.5221 703.492 89.1495C702.278 87.8434 702.598 86.3491 703.205 84.8327C707.011 75.3468 717.535 70.9857 727.045 74.9926C729.792 76.1437 732.164 77.8815 734.437 79.7522C736.235 81.2243 737.415 81.169 737.581 78.5014C737.592 78.2468 737.636 77.9922 737.636 77.7376C737.768 63.2043 739.401 65.4734 726.163 65.2853C717.855 65.1635 709.537 65.3849 701.23 65.2189C697.7 65.1525 696.575 66.6357 696.475 70.0116C696.023 86.4156 695.405 102.819 694.832 119.212C694.655 124.293 696.166 128.743 699.266 132.783C701.627 135.86 701.021 137.354 697.325 138.682C689.735 141.416 681.13 136.944 679.398 128.964C677.224 118.947 678.427 108.786 678.956 98.6908C679.464 88.8396 680.148 78.9884 680.733 69.1372C680.854 67.1338 680.313 65.562 677.93 65.3738C675.448 65.1746 674.356 66.5803 674.257 68.7941C674.069 73.5315 674.058 78.28 673.926 83.0285C673.606 94.5622 673.231 106.096 672.933 117.641C672.79 123.075 673.032 128.344 676.927 132.838C679.409 135.705 678.659 137.42 675.062 138.704C667.704 141.328 659.143 137.133 657.179 129.307C656.054 124.824 654.101 123.308 649.567 123.584C633.35 124.603 625.561 113.368 618.335 101.447C617.74 100.462 617.287 99.3882 616.813 98.3477C613.724 91.64 614.022 90.7766 620.542 87.5999C628.297 83.8255 630.68 73.8968 625.55 66.9456C624.701 65.7944 623.565 65.3517 622.252 65.3406C618.413 65.2963 614.584 65.3074 610.745 65.3074C608.55 65.3074 607.369 66.4586 607.336 68.5948C607.061 87.4339 605.406 106.251 606.211 125.112C606.344 128.256 607.458 130.702 609.874 132.805C612.51 135.096 612.003 137.099 608.76 138.516C600.21 142.246 590.347 136.192 589.63 126.341C588.792 114.818 589.244 103.262 589.961 91.7396C590.402 84.5781 590.921 77.4166 591.307 70.2552C591.428 67.9418 591.594 65.4181 588.097 65.3296C584.588 65.241 584.302 67.5544 584.235 70.1998C583.827 86.2274 583.364 102.244 582.956 118.271C582.823 123.474 583.375 128.41 586.971 132.705C589.553 135.793 588.615 137.775 584.61 138.97C575.796 141.604 567.378 135.461 566.562 125.776C565.624 114.752 566.54 103.738 567.025 92.7358C567.367 85.1869 568.073 77.6491 568.559 70.1002C568.669 68.3292 568.945 66.0712 566.683 65.6063C563.848 65.0196 560.847 64.6876 558.067 65.9937C557.317 66.3479 557.637 67.3883 557.891 68.1189C562.999 83.106 556.435 94.8168 547.289 105.742C543.56 110.191 543.483 110.224 547.388 114.597C552.75 120.585 557.383 127.326 564.72 131.266C565.889 131.897 566.683 133.026 566.253 134.487C565.79 136.092 564.576 137.055 563.032 137.498C559.38 138.538 556.214 137.332 553.357 135.129C548.469 131.355 544.046 127.049 540.515 121.98C536.93 116.821 532.572 113.368 526.063 113.235C524.464 113.202 523.052 112.471 522.092 111.176C519.146 107.169 517.403 102.587 516.907 97.6946C516.576 94.4404 519.058 92.9683 521.948 92.437C527.222 91.4629 531.226 93.8427 534.293 97.7832C536.522 100.65 537.934 100.052 539.71 97.4401C543.604 91.6954 547.499 85.9396 548.845 78.9663C550.268 71.6055 545.502 65.3738 538.883 65.6727C535.308 65.8387 533.819 67.4105 533.874 71.0189C533.94 75.546 535.705 79.1766 539.467 81.822C540.879 82.8182 542.777 83.9029 541.806 86.0946C540.924 88.0648 538.982 88.5076 536.952 88.5297C531.237 88.585 525.015 82.785 523.669 76.0331C523.195 73.6422 522.853 71.2181 523.272 68.7719C523.702 66.2372 522.555 65.2299 520.106 65.2853C517.172 65.3517 514.226 65.3849 511.291 65.2631C507.518 65.0971 506.04 66.8792 505.974 70.5651C505.775 82.1098 505.455 93.6435 505.08 105.177C504.86 112.095 504.054 118.98 505.014 125.92C505.389 128.621 506.228 130.757 508.247 132.617C511.126 135.262 510.585 137.31 506.857 138.738C498.638 141.903 489.613 135.948 488.268 126.883C486.646 115.958 488.312 105.122 488.565 94.2522C488.753 86.1831 489.36 78.114 489.933 70.0559C490.176 66.6135 488.996 65.1525 485.432 65.1635C475.459 65.1857 465.497 64.9311 455.524 64.8868C450.571 64.8647 450.008 65.4956 449.997 70.4101C449.986 73.4872 449.997 76.5644 450.031 79.6415C450.042 80.3831 449.832 81.335 450.571 81.7556C451.608 82.3533 452.215 81.335 452.8 80.7594C455.48 78.114 458.547 76.0663 461.978 74.572C468.84 71.5945 473.043 73.8414 474.831 81.0361C476.916 89.4041 476.452 97.8275 475.967 106.284C475.834 108.608 475.779 110.911 476.794 113.08C477.953 115.56 476.717 116.943 474.621 117.95C469.48 120.419 463.28 117.441 461.934 111.863C461.382 109.582 461.57 107.269 461.691 104.967C461.879 101.381 462.144 97.7943 462.254 94.208C462.309 92.5809 463.07 90.345 461.68 89.4595C459.904 88.3305 458.635 90.6881 457.08 91.3744C450.384 94.3297 448.354 99.6095 448.795 106.66C449.148 112.272 448.552 117.928 448.508 123.562C448.475 127.149 449.512 130.292 452.424 132.772C455.006 134.963 454.432 137.133 451.222 138.527C444.57 141.416 436.064 137.686 433.118 130.613C431.386 126.462 431.541 122.09 431.408 117.729C431.298 114.11 430.636 113.678 427.702 115.825C423.013 119.234 418.104 121.171 412.29 119.345C407.866 117.962 405.726 115.349 405.417 110.7C404.733 100.451 405.616 90.4667 410.525 81.169C414.728 73.2216 422.428 70.2994 430.537 74.096C433.681 75.5682 433.858 74.4834 433.869 71.8158C433.891 65.2631 433.604 64.92 426.996 64.8536C418.942 64.7761 410.889 64.6544 402.835 64.6101C400.364 64.599 397.959 64.267 395.709 63.3372C391.55 61.5994 391.141 57.6478 394.771 54.9803C397.198 53.1982 400.022 53.165 402.846 53.165C428.419 53.165 453.98 53.165 479.552 53.165C479.541 53.0432 479.541 52.9215 479.541 52.7997ZM586.519 52.8883C590.678 52.689 595.113 53.5635 597.121 49.7669C601.489 41.5206 605.472 33.0087 607.458 23.7995C608.572 18.6193 606.277 14.1918 601.677 12.5758C591.219 8.90097 581.312 10.2403 572.166 16.5495C567.809 19.5602 566.22 23.8217 567.345 28.9576C568.548 34.4698 570.169 39.8714 572.828 44.8855C575.84 50.597 580.131 54.0948 586.519 52.8883ZM649.335 65.2742C647.416 65.2742 645.507 65.3185 643.588 65.2631C640.984 65.1857 640.102 66.3257 640.852 68.8273C643.996 79.2319 641.778 87.7659 632.181 93.7099C630.802 94.5622 630.349 95.8019 631.155 97.3294C634.508 103.727 638.778 109.228 645.96 111.564C652.899 113.822 655.866 111.697 656.252 104.48C656.782 94.374 657.334 84.2793 657.896 74.1846C658.382 65.241 658.404 65.241 649.335 65.2742ZM419.472 103.24C419.472 104.646 419.384 106.063 419.494 107.468C419.681 109.903 420.796 110.545 423.079 109.394C430.934 105.432 433.78 97.6946 430.162 89.8247C429.356 88.0759 428.573 86.327 427.646 84.6446C427.073 83.6152 427.007 81.7445 425.396 81.977C424.094 82.1652 423.675 83.7591 423.201 84.9323C420.851 90.7877 419.527 96.8977 419.472 103.24Z"
            fill="#F74061"
          />
          <path
            d="M298.097 86.8923C302.941 95.4596 308.247 102.732 313.807 109.827C319.4 116.966 325.611 123.497 332.782 129.098C325.17 125.567 319.533 119.534 313.024 114.321C315.208 117.331 317.404 120.331 319.798 123.619C312.241 121.759 304.088 110.79 304.684 103.662C304.772 102.599 304.253 101.968 303.757 101.26C301.021 97.3966 298.263 93.5557 295.295 89.7813C296.763 95.2603 300.271 99.9756 301.749 106.052C299.388 105.089 298.671 103.23 297.634 101.802C294.766 97.8726 291.997 93.8767 289.272 89.8477C287.474 87.1801 286.635 84.0587 287.551 81.037C288.632 77.4728 286.845 75.2369 284.55 71.872C284.881 76.3992 286.404 79.8969 285.51 83.4389C284.352 83.8706 283.954 83.0847 283.557 82.4759C278.438 74.7942 274.963 66.4262 273.816 57.2391C273.463 54.4166 274.423 51.3616 270.738 49.2917C270.97 51.915 271.654 54.317 270.319 56.4975C269.138 58.4235 267.925 59.1762 266.314 56.9071C259.507 47.2994 252.326 37.8909 248.387 26.6008C247.46 23.9332 245.419 23.0145 242.65 21.5977C243.599 24.1878 244.405 26.1359 245 28.1393C245.276 29.0802 245.552 30.4527 244.669 31.0393C243.665 31.7035 242.805 30.5855 242.077 29.9325C235.579 24.1435 228.849 18.6645 221.204 13.8274C222.98 13.2076 224.359 14.1927 225.782 13.7831C213.614 9.38883 201.071 8.40371 188.196 9.69875C190.414 8.1602 190.811 8.07165 194.672 7.68424C216.582 5.51476 236.274 12.0675 254.973 22.8817C271.234 32.279 283.083 46.0597 293.806 61.0689C303.724 74.9381 314.182 88.3756 326.417 100.308C332.683 106.407 339.457 111.83 347.411 115.616C354.251 118.87 361.322 120.663 368.956 119.246C369.762 119.102 370.688 118.649 371.461 119.457C364.588 129.596 348.999 133.868 337.747 128.732C330.752 125.533 325.027 120.685 319.952 114.996C313.112 107.336 307.122 99.0348 301.473 90.4786C300.712 89.3386 300.216 87.9771 298.097 86.8923Z"
            fill="#F74061"
          />
          <path
            d="M67.7262 91.1757C71.2123 96.3338 74.6984 101.503 78.1846 106.661C76.9269 100.717 73.529 95.6696 72.3155 89.7147C77.4123 95.88 82.9725 101.68 85.8187 109.329C86.3262 110.701 86.6351 112.572 86.1166 113.833C84.2632 118.372 87.1426 121.261 89.3159 124.482C88.9077 120.287 87.2088 116.213 88.0913 111.83C90.033 111.996 90.4081 113.557 91.081 114.653C95.3284 121.593 99.3882 128.976 99.344 137.111C99.2999 146.387 105.765 151.025 110.597 157.002C115.23 161.817 120.15 166.299 125.567 170.218C126.99 171.911 128.877 172.952 131.491 174.479C130.476 171.325 128.59 169.277 128.424 166.654C128.369 165.79 128.071 164.706 128.987 164.219C129.737 163.82 130.41 164.562 130.973 165.06C137.581 170.871 144.266 176.582 151.57 181.807C150.158 181.574 148.757 181.331 147.355 181.098C152.188 184.685 167.732 186.566 185.405 185.592C183.86 186.954 182.382 186.932 181.036 187.109C161.046 189.798 142.546 185.094 124.806 176.04C108.137 167.539 94.8099 155.352 83.855 140.31C72.7678 125.102 61.7137 109.86 48.2767 96.5773C46.1806 94.5074 44.0845 92.4265 41.845 90.5448C30.1952 80.7268 17.7731 73.0008 0.883057 76.4764C2.28413 73.7978 4.25886 72.6688 6.05708 71.3848C20.0788 61.3122 29.3568 60.5042 45.2319 72.8016C55.7675 80.9593 63.0155 92.1498 70.4511 103.064C72.2493 105.698 73.9814 108.366 76.0885 111.531C74.3565 104.115 58.2607 83.6711 40.5432 66.1492C43.9852 67.4886 45.96 69.171 47.9347 70.776C53.3184 75.1482 58.029 80.1955 62.6073 85.3868C63.865 86.8146 65.3433 88.0433 66.7223 89.3383C67.0422 89.936 67.3842 90.5559 67.7262 91.1757Z"
            fill="#F74061"
          />
          <path
            d="M128.501 117.176C125.512 118.04 123.25 116.922 121.529 114.52C115.053 105.532 113.266 95.4482 114.734 84.6561C115.197 81.2691 117.591 79.1771 120.426 77.4504C117.624 77.2511 116.51 79.5313 114.281 81.3466C114.7 78.2473 115.958 76.4874 118.021 75.1591C118.683 74.7274 119.885 74.34 118.926 73.1446C118.363 72.4473 117.955 72.7461 117.116 73.0893C114.292 74.2626 114.965 71.5839 115.175 70.5656C115.859 67.2671 116.94 64.0572 118.032 60.2052C120.128 72.0045 120.128 72.0045 122.93 73.532C123.416 72.9675 122.941 72.6465 122.632 72.2591C122.401 71.9713 122.213 71.6503 121.739 70.953C123.901 70.8091 126.074 71.0526 127.2 68.9606C128.115 67.256 127.409 65.7507 126.692 64.2343C126.35 63.9465 126.008 63.6476 125.666 63.3488C123.647 60.5816 121.849 60.814 120.316 64.3339C118.65 60.4598 119.521 57.4823 121.75 54.9586C122.875 53.6857 123.206 52.5346 123.195 50.8853C123.195 46.9006 125.523 43.6906 127.597 40.6135C131.557 34.7249 135.617 28.8363 141.266 24.3645C142.104 23.7004 142.942 22.3832 144.2 23.2909C145.171 23.9993 144.167 25.3275 144.432 26.1245C145.965 30.7512 141.409 30.7512 139.743 33.0425C143.097 32.1348 146.142 30.8619 147.245 27.01C148.414 22.9588 154.184 19.1954 158.222 19.7821C159.855 20.0145 160.318 20.6787 159.171 22.0069C158.586 22.6821 157.891 23.2577 157.229 23.8554C152.033 28.4932 147.245 33.5848 143.461 39.3959C141.21 42.8494 139.942 47.0112 138.563 50.9628C137.978 52.6342 137.415 54.2613 136.687 55.8995C135.121 59.3972 134.889 62.8396 138.155 65.9721C140.515 68.2411 142.623 71.0858 139.622 75.0263C139.324 67.8648 133.587 64.511 130.476 59.4525C130.024 61.8434 128.788 64.3339 131.988 65.6068C131.293 68.2412 130.145 70.6984 128.237 73.8198C132.749 71.7167 131.888 68.4847 131.988 65.6289C131.877 65.164 132.219 64.7213 132.506 65.0091C134.26 66.769 134.812 69.016 134.371 71.3736C133.929 73.7313 132.241 75.0484 129.903 75.5797C129.042 75.779 127.409 75.4026 127.74 76.8969C127.983 77.9706 128.678 79.5313 130.2 79.476C131.723 79.4206 130.973 78.1809 131.215 77.3507C131.811 75.3141 134.757 74.7164 135.452 72.3366C136.423 72.8015 136.268 73.5542 136.103 74.0523C135.187 76.7641 135.981 77.6053 138.706 76.6977C141.927 75.624 142.832 78.2916 144.002 80.2397C145.8 83.2283 147.124 83.4718 149.584 80.937C150.29 80.2065 150.919 79.3763 151.448 78.5019C152.971 76.0114 153.18 73.8973 149.683 72.9564C148.458 72.6244 146.947 72.4141 148.205 70.477C149.131 69.0602 151.062 67.3003 148.878 65.9056C146.473 64.3671 145.8 67.1675 144.686 68.5511C144.388 68.9163 144.167 69.348 143.549 70.3442C143.042 66.8686 143.902 64.4556 145.998 62.74C148.105 61.0132 149.705 63.227 151.47 64.1346C152.276 62.9613 151.128 61.5003 152.143 60.4819C158.431 62.9835 163.087 61.1903 161.289 55.2243C164.389 56.9067 164.642 57.9472 163.043 62.2862L163.12 62.1976C161.278 63.5591 159.435 64.9316 157.439 66.4148C159.281 68.6396 161.366 69.6137 164.223 67.4995C163.175 72.237 161.399 73.3106 157.869 71.7278C156.788 71.2408 155.563 70.6874 154.658 71.6614C153.776 72.6133 155.166 73.1446 155.574 73.8309C156.523 75.4137 156.644 77.0962 155.729 78.5794C153.324 82.4535 150.433 85.9069 145.601 86.6485C143.858 86.9142 143.119 87.368 143.251 89.2275C143.417 91.3638 143.284 93.5333 143.284 95.7138C145.105 95.7913 145.7 94.3524 146.826 93.8653C149.098 92.8802 151.547 92.2936 153.864 91.5962C157.074 90.6333 160.803 94.3967 161.719 98.5474C161.851 99.1673 161.818 99.8203 161.918 100.451C162.171 102.2 162.977 104.414 161.465 105.488C160.13 106.428 158.409 104.801 156.953 104.126C153.026 102.322 153.07 102.267 152.971 106.672C152.937 108.199 153.158 110.037 151.757 110.922C150.036 112.007 149.043 109.993 147.863 109.24C145.458 107.723 143.196 105.775 142.667 102.864C142.093 99.6986 140.835 99.8978 138.761 101.414C138.287 101.757 137.625 101.835 136.742 101.89C141.343 98.7356 140.361 94.6734 138.872 90.6001C138.022 88.2756 137.57 85.918 137.603 83.4496C137.636 81.6012 136.753 81.3244 135.154 81.7783C131.59 82.7855 130.873 84.1248 132.208 87.3348C132.639 88.3752 132.771 89.5153 131.127 89.4268C129.958 89.3604 128.832 89.2718 127.762 89.8142C126.858 90.268 125.953 90.7329 124.773 91.3195C124.541 89.7588 125.622 88.9176 126.119 87.8661C126.637 86.7592 127.972 85.4199 126.692 84.4569C125.501 83.5603 124.409 85.0768 123.471 85.8516C120.967 87.9214 119.621 90.6665 119.422 93.8653C119.025 100.285 120.845 106.296 123.228 112.14C123.769 113.468 124.706 114.608 126.262 114.807C127.696 114.996 128.689 114.265 129.307 112.97C129.881 111.764 129.174 111.409 128.204 111.077C126.88 110.612 126.582 109.539 126.869 108.277C127.012 107.624 127.398 107.104 128.148 107.037C129.483 106.926 130.355 107.757 130.951 108.742C133.201 112.494 130.895 114.996 128.424 117.409C128.38 117.386 128.501 117.176 128.501 117.176Z"
            fill="#F74061"
          />
          <path
            d="M243.158 152.64C239.583 153.072 237.576 150.548 235.149 148.722C233.648 154.743 235.292 157.178 240.08 156.548C238.491 170.538 203.663 190.495 181.577 189.765C196.283 186.002 209.488 178.763 223.841 172.022C219.384 171.568 219.229 168.834 220.73 167.008C222.991 164.274 224.514 161.163 226.588 157.577C227.437 161.053 227.117 164.163 228.893 166.709C228.154 161.794 227.316 156.946 229.997 151.877C230.46 153.028 230.769 153.78 231.199 154.865C231.519 154.223 231.795 153.913 231.806 153.603C231.96 150.327 233.67 147.294 233.361 143.929C233.328 143.509 233.659 142.833 234.012 142.656C234.784 142.269 235.149 142.999 235.391 143.564C236.969 147.405 239.396 150.537 243.158 152.64Z"
            fill="#F74061"
          />
          <path
            d="M216.052 98.7571C216.041 94.2521 214.32 90.5883 210.867 87.6883C208.738 85.9062 208.429 84.5669 211.639 83.5264C213.857 82.807 216.968 81.1577 217.95 83.0948C219.395 85.9284 221.689 85.6738 223.708 86.7143C226.157 87.9761 225.915 90.533 225.694 92.8574C225.573 94.1082 226.146 96.0009 223.664 95.5471C222.649 95.359 222.671 96.0563 222.87 96.7204C223.08 97.4178 223.234 98.4804 224.072 98.4139C227.029 98.1704 229.489 100.085 232.335 100.152L232.236 100.085C235.766 101.414 237.068 104.845 239.208 107.49C239.771 108.188 239.925 108.719 239.197 109.45C237.587 111.077 233.604 111.032 231.685 109.881C230.769 109.328 230.758 104.878 228.176 108.63C227.956 108.951 226.83 108.055 226.522 107.335C225.882 105.819 225.341 104.258 224.414 101.812C224.988 106.45 225.882 110.036 227.051 113.589C227.316 114.397 228.132 115.405 227.25 116.046C226.224 116.788 225.319 115.748 224.613 115.106C220.983 111.796 219.373 107.302 217.718 102.864C217.188 101.447 217.1 99.8418 215.964 98.6796L216.052 98.7571Z"
            fill="#F74061"
          />
          <path
            d="M125.578 170.229C120.162 166.311 115.23 161.828 110.608 157.013C108.854 154.069 106.978 151.18 105.368 148.147C103.834 145.258 103.261 142.092 104.121 138.86C104.673 136.79 105.776 135.838 107.431 138.063C114.315 147.261 121.121 156.515 125.876 167.074C126.306 168.015 127.641 169.388 125.578 170.229Z"
            fill="#F74061"
          />
          <path
            d="M199.217 70.621C202.901 70.5436 203.674 72.868 202.791 75.7127C202.129 77.8379 202.703 78.9116 204.203 80.273C207.733 83.483 208.009 85.2208 207.259 94.3968C205.163 93.2235 203.718 91.5189 203.475 89.3494C203.221 87.1024 201.875 86.4826 200.32 85.2429C193.37 79.6974 186.706 73.7424 183.419 65.0867C182.459 62.563 184.356 60.0946 186.783 60.4488C188.129 60.6481 189.762 60.9469 188.317 63.1386C186.508 65.8615 187.82 68.3298 189.398 71.8386C189.398 69.0603 189.288 67.4332 189.442 65.8283C189.541 64.7878 190.137 63.8691 191.428 63.8802C192.498 63.8912 193.436 64.2897 194.153 65.0977C195.046 66.1161 194.131 66.6474 193.535 67.3115C192.255 68.7504 192.73 70.134 193.789 71.4512C194.815 72.7462 196.26 73.6871 196.922 75.2921C197.462 76.6093 198.411 76.5428 199.371 75.7791C200.165 75.1482 201.147 74.5173 199.757 73.4214C198.797 72.6577 199.217 71.5398 199.294 70.5436L199.217 70.621Z"
            fill="#F74061"
          />
          <path
            d="M248.905 89.8807C252.402 93.301 254.134 97.1086 251.641 101.912C251.365 102.455 250.78 103.307 251.453 103.617C254.642 105.067 253.373 108.343 254.443 110.635C254.741 111.277 255.204 112.151 254.035 112.505C253.009 112.815 252.468 112.384 252.027 111.354C250.593 108 248.442 107.336 246.235 110.225C242.209 115.505 236.373 113.236 231.43 114.608C230.934 114.741 230.371 114.487 230.382 113.845C230.393 113.092 230.967 112.638 231.64 112.649C234.111 112.693 236.351 111.476 238.756 111.343C241.37 111.188 242.871 109.705 243.279 107.458C243.676 105.355 241.326 105.554 240.146 104.868C236.527 102.765 234.696 98.0606 236.77 94.2529C238.005 91.9727 238.204 89.9582 237.708 87.6338L237.752 87.667C241.161 90.08 245.397 88.4639 248.982 89.9914L248.905 89.8807ZM244.007 92.7143C245.463 95.0499 246.853 97.4296 248.42 99.6877C248.927 100.418 249.732 102.2 250.913 100.374C252.292 98.2487 251.851 95.9796 250.593 93.9098C249.435 91.9949 247.868 90.5227 245.452 90.5891C244.305 90.6224 244.117 91.5521 244.15 92.5262C241.028 90.3678 239.164 92.017 237.884 94.7731C236.461 97.8392 237.652 101.746 240.477 103.517C241.977 104.458 244.04 105.554 245.165 103.65C246.224 101.868 244.338 100.927 242.804 100.108C240.421 98.8464 240.421 95.4151 242.992 94.7399C244.845 94.2418 244.029 93.5556 244.007 92.7143Z"
            fill="#F74061"
          />
          <path
            d="M181.136 43.0707C185.107 47.1993 179.437 49.0146 178.896 52.0806C178.764 52.8112 177.727 53.741 176.535 53.741C175.3 52.6562 176.866 51.66 176.635 50.5974C175.642 50.4757 175.222 51.1177 175.046 51.8814C174.163 55.5562 172.509 58.0356 168.151 56.6963C167.324 56.4417 166.518 56.7295 166.364 57.6261C166.088 59.1757 167.29 59.8399 168.383 60.504L168.305 60.3933C168.581 62.7841 167.677 64.4002 165.194 64.7322C163.275 64.9979 162.712 63.9242 163.098 62.1754C163.098 62.1754 163.021 62.2639 163.021 62.2528C164.146 62.1754 165.272 62.0979 166.397 62.0204C166.044 57.449 161.675 52.5234 167.599 48.2619C167.522 47.5646 163.595 48.76 166.408 46.4466C168.559 44.6756 170.644 42.7054 173.446 41.9084C176.635 41.9859 179.602 42.5615 181.411 45.7382C182.272 44.4653 181.61 43.7901 181.136 43.0707Z"
            fill="#F74061"
          />
          <path
            d="M233.538 117.188C240.246 117.464 246.975 117.796 253.705 117.166C256.297 116.922 255.977 118.461 254.918 119.645C252.921 121.892 251.388 123.862 254.466 126.43C255.128 126.984 255.084 128.146 254.124 128.755C253.352 129.242 252.37 128.898 252.105 128.256C250.185 123.596 246.004 125.356 242.662 124.847C240.4 124.504 238.072 124.626 235.811 124.294C233.339 123.94 231.596 122.6 231.188 119.911C230.923 118.04 231.265 116.789 233.538 117.188Z"
            fill="#F74061"
          />
          <path
            d="M143.141 133.014C138.949 133.69 135.309 132.882 132.815 129.085C131.558 127.159 131.8 126.096 134.393 126.008C137.901 125.886 141.398 125.831 144.917 125.986C148.084 126.13 148.911 126.982 147.256 129.771C146.87 130.424 146.462 131.066 146.076 131.708C145.094 132.14 144.112 132.583 143.141 133.014Z"
            fill="#F74061"
          />
          <path
            d="M128.502 117.177L128.38 117.387C128.502 117.343 128.612 117.243 128.733 117.254C130.013 117.321 131.238 115.041 132.319 116.679C133.312 118.184 131.745 119.402 130.068 120.885C133.698 121.128 133.466 118.926 133.709 117.055C134.161 113.535 137.382 111.122 140.361 112.063C140.957 112.251 141.541 112.572 141.464 113.701C136.632 113.369 135.772 116.446 135.772 120.475C135.772 123.165 131.326 126.342 128.689 125.81C128.457 125.766 128.038 125.534 128.049 125.467C128.899 121.449 123.482 121.881 123.107 118.417C124.96 118.029 127.001 118.56 128.502 117.177Z"
            fill="#F74061"
          />
          <path
            d="M230.007 82.1648C227.801 80.7812 228.176 78.6007 227.47 76.9514C226.455 74.6159 225.44 72.2804 224.513 69.9117C223.3 66.8125 223.223 63.68 226.135 61.6101C229.014 59.5624 231.563 61.422 234.012 63.0491C233.791 63.4697 233.725 63.8018 233.56 63.8682C227.172 66.4361 227.26 66.4029 229.235 73.0442C230.073 75.8556 230.835 78.7999 230.007 82.1648Z"
            fill="#F74061"
          />
          <path
            d="M237.752 87.6556L237.708 87.6224C236.715 87.4896 235.689 87.4563 234.729 87.1796C233.714 86.8918 231.861 88.5522 231.794 86.2499C231.75 84.7777 233.504 85.0212 234.497 84.7224C240.256 82.9735 246.092 84.822 251.895 84.5895C253.572 84.5231 255.337 90.1239 254.267 91.4522C253.66 92.2049 252.932 92.061 252.226 91.7068C251.1 91.1312 250.008 90.4892 248.905 89.8693L248.982 89.98C246.93 87.1686 243.808 86.427 240.697 85.6189C238.844 85.1319 238.105 86.0617 237.752 87.6556Z"
            fill="#F74061"
          />
          <path
            d="M247.162 137.199C244.161 135.561 241.15 133.956 238.171 132.285C237.399 131.853 236.516 131.189 237.024 130.159C237.608 128.964 238.634 129.695 239.329 130.071C243.169 132.119 247.14 133.834 251.277 135.185C253.45 135.893 253.075 137 251.531 138.107C248.552 140.232 238.888 139.081 236.638 136.369C236.196 135.827 235.909 135.229 236.307 134.642C236.858 133.845 237.619 134.133 238.348 134.487C239.727 135.151 241.083 135.871 242.518 136.424C243.93 136.967 245.408 137.332 246.853 137.775C246.953 137.564 247.063 137.387 247.162 137.199Z"
            fill="#F74061"
          />
          <path
            d="M67.7264 91.1756C67.3844 90.5558 67.0424 89.9359 66.7004 89.3272C62.42 83.5714 58.1175 77.8046 53.826 72.0267C54.0908 71.8164 54.3446 71.6061 54.6093 71.3958C60.9527 75.779 66.8328 80.605 69.2268 88.497C69.5467 89.5485 70.5175 91.6073 67.7264 91.1756Z"
            fill="#F74061"
          />
          <path
            d="M164.599 116.346C164.974 116.379 165.415 116.312 165.724 116.478C168.692 118.128 171.549 119.467 173.678 115.25C173.965 114.674 175.046 114.575 175.763 115.095C176.591 115.681 176.646 116.589 176.58 117.497C176.315 121.072 171.306 124.138 167.688 122.799C165.901 122.146 164.301 121.017 162.999 119.589C162.404 118.936 161.753 118.161 162.238 117.209C162.701 116.268 163.716 116.39 164.599 116.346Z"
            fill="#F74061"
          />
          <path
            d="M173.414 42.0295C175.995 38.7531 179.36 36.5283 183.133 34.9233C184.556 34.3145 186.156 34.1153 187.435 35.3329C188.803 36.639 188.163 38.1665 187.634 39.6054C187.325 40.4356 186.961 41.2657 186.553 42.0516C185.45 44.1657 184.236 44.9627 183.122 42.0848C182.747 41.1218 182.217 40.2695 181.257 40.823C180.298 41.3764 181.059 42.4169 181.268 43.236C179.029 40.2142 176.161 41.5092 173.414 42.0295Z"
            fill="#F74061"
          />
          <path
            d="M143.141 133.015C144.123 132.572 145.105 132.141 146.065 131.709C146.859 130.923 147.642 130.093 148.503 129.351C149.363 128.61 149.396 126.407 151.073 127.248C152.761 128.09 153.92 129.75 154.184 131.776C154.416 133.558 153.467 134.764 151.868 135.24C148.9 136.137 145.866 135.904 142.865 135.373C142.17 135.251 141.089 135.118 141.343 134.166C141.464 133.657 142.501 133.392 143.141 133.015Z"
            fill="#F74061"
          />
          <path
            d="M236.152 73.9197C237.609 74.9823 239.319 74.285 240.885 74.5395C241.735 74.6834 242.959 74.4731 243.014 75.6464C243.081 77.1186 241.702 76.875 240.753 77.0079C240.256 77.0854 239.738 77.0411 239.23 77.0521C231.629 77.196 231.629 77.196 234.685 70.5548C235.093 69.6582 235.888 68.7506 234.707 67.854C234.255 67.5109 233.295 67.5109 233.748 66.6032C234.134 65.8063 234.972 65.8173 235.755 65.8506C237.476 65.9059 238.646 66.9021 239.352 68.3189C240.069 69.7578 238.899 70.6433 238.083 71.6174C237.465 72.3701 236.23 72.5914 236.152 73.9197Z"
            fill="#F74061"
          />
          <path
            d="M165.15 101.237C168.559 105.011 168.239 110.224 164.334 113.202C162.911 114.287 161.333 115.183 160.406 116.788C159.822 117.795 159.182 118.482 158.012 117.541C156.843 116.611 156.457 115.515 157.417 114.231C157.714 113.833 158.145 113.445 158.597 113.29C163.517 111.674 164.576 107.822 164.51 103.251C164.499 102.554 164.245 101.69 165.15 101.237Z"
            fill="#F74061"
          />
          <path
            d="M183.838 124.604C185.923 126.862 187.004 128.976 187.754 131.289C188.218 132.717 188.262 134.023 187.082 135.152C185.912 136.27 184.533 136.281 183.198 135.65C181.51 134.853 179.734 134.101 178.543 131.997C182.591 131.433 183.154 128.267 183.838 124.604Z"
            fill="#F74061"
          />
          <path
            d="M215.986 98.6478C216.096 100.286 216.196 101.913 216.339 104.06C212.412 100.009 207.535 97.0317 208.914 90.479C209.058 89.8038 208.44 88.8187 209.499 88.542C210.305 88.3317 210.9 89.0069 211.419 89.5824C213.813 92.2057 214.111 95.9027 216.074 98.7585C216.052 98.7585 215.986 98.6478 215.986 98.6478Z"
            fill="#F74061"
          />
          <path
            d="M246.148 81.2024C242.54 82.907 238.48 82.1764 234.509 82.2207C232.777 82.2428 232.699 80.9589 232.655 79.5531C232.589 77.9814 233.35 77.5275 234.674 77.5054C238.833 77.4279 243.158 76.7084 246.148 81.2024Z"
            fill="#F74061"
          />
          <path
            d="M129.925 102.42C129.538 100.24 131.502 99.7971 131.326 98.3692C126.67 97.7936 125.777 96.731 127.2 93.5764C128.159 91.4512 129.627 91.0196 131.469 92.3921C133.135 93.6318 134.657 95.1925 134.558 97.4173C134.437 100.129 132.076 100.948 129.925 102.42Z"
            fill="#F74061"
          />
          <path
            d="M234.883 126.098C237.652 124.969 240.046 125.943 242.341 126.939C245.728 128.411 249.038 130.071 252.347 131.687C253.108 132.064 254.189 132.451 253.649 133.624C253.141 134.72 252.104 134.344 251.299 134.012C249.413 133.237 247.515 132.473 245.739 131.499C242.22 129.562 238.656 127.68 234.883 126.098Z"
            fill="#F74061"
          />
          <path
            d="M157.075 14.5684C161.112 12.0115 165.382 10.0855 169.938 8.84581C170.788 8.61336 171.758 8.1374 172.409 9.02291C173.159 10.0302 172.498 10.971 171.869 11.7901C170.523 13.5279 169.287 15.0886 166.507 14.1699C163.429 13.1626 160.241 14.1367 157.075 14.5684Z"
            fill="#F74061"
          />
          <path
            d="M236.362 137.741C236.605 138.106 236.969 138.771 237.443 139.368C239.815 142.357 241.856 145.733 245.905 146.818C246.544 146.995 247.085 147.404 246.765 148.212C246.5 148.899 245.871 149.065 245.221 149.109C242.099 149.352 234.773 142.512 234.839 139.368C234.861 138.748 234.972 138.095 236.362 137.741Z"
            fill="#F74061"
          />
          <path
            d="M188.781 6.40003C185.107 7.83897 181.467 9.34433 177.749 10.6504C176.789 10.9936 175.322 12.7978 174.649 10.739C174.207 9.36646 174.991 7.55119 176.789 7.16378C179.392 6.59927 182.051 6.25614 184.71 5.94621C186.067 5.79125 187.457 5.92408 188.825 5.92408C188.814 6.07904 188.792 6.234 188.781 6.40003Z"
            fill="#F74061"
          />
          <path
            d="M222.517 71.3842C221.039 69.5689 219.34 67.8865 218.148 65.9052C216.946 63.9128 217.431 61.9536 219.693 60.8246C220.575 60.3819 221.59 59.7509 222.528 60.4925C223.433 61.2009 222.704 62.1307 222.451 62.9387C221.59 65.6949 222.749 68.3514 222.517 71.3842Z"
            fill="#F74061"
          />
          <path
            d="M177.727 129.429C176.061 129.65 174.869 127.669 174.803 126.252C174.726 124.68 175.52 122.588 178.135 122.544C180.694 122.5 181.643 124.503 181.82 126.086C182.007 127.769 180.54 129.296 177.727 129.429Z"
            fill="#F74061"
          />
          <path
            d="M215.048 80.7937C211.452 81.3582 208.396 80.6941 205.461 79.5761C203.828 78.9563 203.409 77.3956 203.542 75.7463C203.63 74.7059 203.939 73.6322 205.229 73.5658C206.222 73.5215 207.083 74.1967 207.105 75.1375C207.193 78.6463 208.749 79.5318 212.003 78.5135C213.073 78.1815 214.121 79.1334 215.048 80.7937Z"
            fill="#F74061"
          />
          <path
            d="M232.357 100.141C231.265 98.602 229.279 98.3584 227.988 97.1187C226.4 95.5913 225.992 93.2225 227.293 91.9496C228.849 90.4332 230.371 92.492 231.11 93.7981C232.17 95.6577 234.762 97.4729 232.247 100.074C232.258 100.074 232.357 100.141 232.357 100.141Z"
            fill="#F74061"
          />
          <path
            d="M137.272 118.725C137.548 117.651 137.647 115.913 138.817 116.666C140.306 117.629 143.252 117.529 142.843 120.429C142.634 121.891 141.994 123.85 140.141 123.473C137.791 122.975 137.835 120.474 137.272 118.725Z"
            fill="#F74061"
          />
          <path
            d="M138.475 109.373C137.901 111.177 135.993 111.642 134.878 111.498C132.937 111.266 132.396 108.764 132.231 107.392C131.999 105.488 134.294 106.451 135.452 106.208C137.978 105.665 137.581 108.123 138.475 109.373Z"
            fill="#F74061"
          />
          <path
            d="M150.797 18.8306C155.376 16.8271 159.005 15.7424 162.778 15.1668C163.904 14.9897 165.713 14.1706 165.856 16.0634C165.978 17.613 164.246 18.5317 162.844 18.2439C159.116 17.447 155.563 18.6867 150.797 18.8306Z"
            fill="#F74061"
          />
          <path
            d="M125.655 63.3374C125.997 63.6363 126.339 63.9241 126.681 64.2229C126.726 64.4775 126.792 64.721 126.814 64.9756C126.924 66.7798 127.2 68.894 124.685 69.0711C122.776 69.2039 122.213 67.455 122.136 65.8722C122.015 63.3485 123.548 62.8615 125.655 63.3374Z"
            fill="#F74061"
          />
          <path
            d="M156.81 56.3972C158.145 56.6629 159.667 56.9174 159.513 58.5667C159.358 60.1606 157.836 60.3266 156.523 60.2713C155.343 60.2159 154.041 59.906 154.085 58.4117C154.14 56.7403 155.563 56.5632 156.81 56.3972Z"
            fill="#F74061"
          />
          <path
            d="M170.964 112.517C170.688 113.713 171.163 115.251 169.442 115.284C167.743 115.318 167.489 113.823 167.356 112.584C167.224 111.41 167.61 110.06 168.978 109.96C170.765 109.827 170.589 111.521 170.964 112.517Z"
            fill="#F74061"
          />
          <path
            d="M168.383 60.4937C168.372 60.2392 168.35 59.9956 168.361 59.7411C168.537 57.1178 170.556 57.7376 171.99 57.9036C173.082 58.0254 172.685 59.0991 172.167 59.6193C171.097 60.693 170.181 63.1613 168.295 60.3941C168.306 60.3941 168.383 60.4937 168.383 60.4937Z"
            fill="#F74061"
          />
          <path
            d="M145.458 120.651C147.179 121.891 148.833 122.743 148.006 124.47C147.421 125.676 145.458 125.698 144.63 124.824C143.108 123.23 145.877 122.555 145.458 120.651Z"
            fill="#F74061"
          />
          <path
            d="M199.305 70.5437C198.93 70.5991 198.566 70.7208 198.191 70.7098C196.757 70.6544 195.091 71.1968 194.274 69.4147C194.032 68.8945 194.462 68.4296 194.958 68.2636C196.768 67.6659 197.694 68.9941 198.731 70.0678C198.908 70.2449 199.051 70.4552 199.217 70.6434C199.217 70.6212 199.305 70.5437 199.305 70.5437Z"
            fill="#F74061"
          />
        </g>
        <defs>
          <clipPath id="clip0_181_3">
            <rect
              width={855}
              height={213}
              fill="white"
              transform="translate(0.883057 0.134521)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
    <div className="form-wrapper">
      <div className="form-group">
        {/* <label for="email">Email</label> */}
        <input type="email" placeholder="Enter Email" id="email" />
      </div>
      <div className="form-group">
        {/* <label for="password">Password</label> */}
        <input type="password" placeholder="Enter Password" id="password" />
      </div>
      <div className="form-extra">
        <div className="check-wrapper">
          <input type="checkbox" id="check" className="mr-10" />
          <label htmlFor="check">Remember Me</label>
        </div>
        <p className="secondary-class cursor-pointer">Forgot Password?</p>
      </div>
      <button className="primary-button my-35 cursor-pointer">Log in</button>
      <hr className="separator w-100" />
      <div className="signup-info-wrapper">
        <p className="light-gray fs-14 text-center py-25">
          Don't have an account?{" "}
          <span className="secondary-class">Sign up</span>
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default Login