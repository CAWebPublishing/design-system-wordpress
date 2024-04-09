<?php
/**
 * Design System Footer
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package cagov-design-system
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Detect plugin. For use on Front End only.
 *
 *  @link https://developer.wordpress.org/reference/functions/is_plugin_active/
 */
require_once ABSPATH . 'wp-admin/includes/plugin.php';

$cagov_design_system_is_caweb_plugin_active = is_plugin_active( 'caweb-admin/caweb-admin.php' ) || is_plugin_active_for_network( 'caweb-admin/caweb-admin.php' );
$mode = get_option('cagov_design_system_mode', 'default');


?>
<!-- Footer -->
<footer>
  <!-- BEGIN Embossed CA Bear -->
  <svg
    width="721"
    height="497"
    viewBox="0 0 721 497"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_1090_14255)">
      <g style="mix-blend-mode:soft-light">
        <path
          d="M424.328 362.018V362.059C425.832 365.02 428.94 366.01 431.155 368.111C445.64 381.832 459.705 395.988 475.282 408.398C481.169 413.106 486.911 418.321 489.355 426.312C492.883 437.821 486.018 446.4 475.061 444.975C456.04 442.488 439.943 447.703 436.339 472.571C462.194 472.571 487.965 472.531 513.782 472.571C515.729 472.571 516.668 471.541 517.836 470.044C529.802 454.383 541.775 438.77 551.266 421.25C554.565 415.126 557.795 408.559 556.894 401.404C555.206 388.077 550.586 375.627 545.302 363.37C541.026 353.488 534.796 344.587 531.871 334.028C531.871 334.028 531.199 332.604 532.726 330.189C533.788 328.515 535.307 329.521 536.208 329.715C544.127 331.372 552.075 332.242 560.108 333.038C578.159 334.777 595.791 333.867 612.902 327.308L623.593 320.532L628.67 316.589C631.037 318.134 633.397 319.631 635.764 321.176L637.864 325.328V325.449C631.373 337.151 627.693 349.963 626.723 363.33C624.959 387.723 627.922 411.762 633.175 435.567C634.412 441.064 635.879 446.915 633.779 452.806C632.992 455.099 632.053 455.655 630.175 454.19C629.35 453.554 628.67 452.492 627.807 452.25C612.085 448.339 596.89 447.623 583.642 460.041C580.374 463.083 578.35 466.648 577.19 470.873C575.242 477.875 578.205 482.1 584.993 482.1H692.452C699.019 482.1 700.218 481.19 700.898 474.35C701.272 470.672 701.722 466.6 700.745 463.163C697.744 452.411 702.585 444.855 712.901 442.408C719.88 440.75 725.057 436.638 729.486 431.101C732.937 426.755 736.58 422.522 739.802 417.975C754.211 397.727 768.917 377.76 784.678 358.663V358.743C786.403 357.198 788.091 355.701 789.778 354.156H789.74C797.475 363.877 801.828 375.466 806.066 387.055C810.716 399.787 818.451 407.971 831.806 410.466C848.651 413.629 865.312 418.055 881.485 424.148C888.571 426.795 895.626 429.403 901.972 433.757C903.506 434.787 905.461 435.929 904.781 438.263C904.216 440.316 902.193 440.992 900.391 441.265C897.237 441.78 894.13 441.66 890.938 440.589C887.448 439.446 883.806 438.609 880.171 438.175C869.664 436.952 862.387 443.671 855.294 450.271C850.529 454.697 846.703 460.073 845.085 466.841C843.626 472.965 844.825 474.631 850.75 474.631C877.919 474.631 905.117 474.43 932.286 474.792C937.951 474.873 940.242 473.175 941.853 467.356C946.916 448.935 952.062 430.505 960.386 413.307C965.944 401.839 965.265 397.614 957.163 388.319C951.268 381.559 944.816 375.233 940.128 367.362C931.27 352.538 928.949 335.694 927.559 318.85C926.093 301.097 924.856 283.303 925.23 265.469C925.307 261.992 924.558 258.435 923.917 254.95C920.992 238.815 916.266 223.282 909.959 208.297C904.82 196.081 899.864 183.703 890.938 173.821L890.9 173.861C893.939 168.131 898.512 162.908 896.374 155.399C894.427 155.278 893.335 157.178 891.724 157.894L891.831 157.813C891.388 154.812 892.358 151.721 891.236 148.8C885.646 134.523 878.965 121.518 861.929 120.174C861.364 120.134 860.769 119.425 860.356 118.91C857.951 115.949 855.477 113.06 853.186 110.018C845.497 99.8934 837.128 90.4453 827.11 82.6952C804.714 65.3361 779.424 54.5038 753.042 46.4801C728.616 39.0439 703.7 34.1026 678.38 30.9398C660.367 28.6864 642.438 27.1412 624.348 26.9078C607.725 26.7066 591.14 27.5034 574.632 29.2417L574.67 29.2819L574.639 29.2417L574.601 29.2015C560.872 30.6662 547.097 31.5756 533.444 33.6277C517.592 36.0743 524.991 37.2171 483.849 39.6877L483.91 40.0338C476.443 39.8728 469.387 37.9414 462.484 35.0522C446.541 28.3725 431.384 19.7131 415.211 13.6611C402.413 8.88075 389.662 3.89111 375.742 4.52688H375.78C372.893 4.36593 370.076 4.2935 367.189 4.84075C348.016 8.63931 331.767 18.9968 315.602 29.636C301.941 38.6093 288.701 48.2587 273.994 55.2602C261.235 61.3524 247.88 66.1731 236.212 74.6313C235.273 75.3073 234.296 75.3073 233.326 75.2671C228.561 74.9935 224.43 77.0457 220.566 79.5002C206.005 88.8277 194.605 101.962 183.082 114.927L183.044 115.007C181.059 116.866 180.005 119.755 177.752 120.898C171.407 111.49 164.466 102.943 152.272 104.448C138.466 106.106 135.649 117.695 134.076 130.185C129.234 125.719 124.248 123.111 118.659 122.677C107.365 121.767 96.1103 132.914 96.5608 145.017C96.8586 153.001 95.0947 159.648 89.8794 165.378C86.3899 169.257 82.9766 173.209 79.6398 177.241C73.5617 184.597 67.224 191.751 62.3829 200.097C57.3203 208.837 58.481 218.639 58.7787 228.167C58.9696 234.34 56.7934 239.201 53.2275 243.627C40.2466 259.803 26.0287 274.708 11.8032 289.653C9.58881 291.986 9.29102 293.564 11.6123 296.139C23.9976 309.78 36.9403 322.632 52.5479 332.161C59.5652 336.434 67.2163 338.253 75.3943 336.95C79.8994 336.241 84.3969 335.525 88.902 335.09C103.464 333.706 117.872 331.211 132.312 328.918C139.512 327.775 146.682 324.805 154.188 327.654C158.579 329.312 163.153 330.696 167.734 331.533C178.356 333.473 189.122 335.292 199.629 331.219C209.044 327.582 215.389 319.598 221.353 311.768C227.843 303.269 233.662 294.369 243.68 289.862C247.322 288.244 249.835 284.679 253.92 283.456C264.236 280.373 274.59 280.889 285.028 282.273L284.99 282.393L286.983 283.464C285.746 285.556 284.203 287.496 283.302 289.749C275.834 308.452 272.459 328.258 271.032 348.265C270.092 361.391 267.351 372.625 258.234 382.508C249.605 391.916 243.566 403.585 238.014 415.48C233.96 424.22 231.745 433.588 228.072 442.448C224.323 451.502 218.619 454.705 209.571 452.411C206.83 451.743 204.096 450.593 201.317 450.319C195.391 449.764 189.909 446.601 183.533 448.46C171.376 451.977 164.397 461.827 156.891 471.074C155.318 472.974 153.142 475.388 154.792 478.148C156.296 480.716 159.182 481.078 161.992 481.078H268.023C270.123 481.078 271.513 480.683 273.017 478.591C284.723 462.342 298.94 449.096 315.831 438.931C325.246 433.274 335.493 429.282 344.725 423.158C371.893 405.171 394.701 381.961 416.731 357.721L416.769 357.64"
          fill="#FAFAFA"
          fill-opacity="0.2" />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_d_1090_14255"
        x="0.00195312"
        y="-1.58984"
        width="974"
        height="497.69"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB">
        <feflood flood-opacity="0" result="BackgroundImageFix" />
        <fecolormatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha" />
        <feoffset dy="4" />
        <fegaussianblur stdDeviation="5" />
        <fecomposite in2="hardAlpha" operator="out" />
        <fecolormatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feblend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1090_14255" />
        <feblend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_1090_14255"
          result="shape" />
      </filter>
    </defs>
  </svg>
  <!-- END Embossed CA Bear -->
  <div id="container">
    <figure>
      <img height="90vh" src="<?php print esc_url( CAGOV_DESIGN_SYSTEM_URL ); ?>/build/fonts/gov-seal-v2.svg" alt="Governor's Seal" />
      <figcaption>
        <small><?php print_r( wp_specialchars_decode( get_bloginfo('name'), ENT_QUOTES ) ); ?></small>
      </figcaption>
    </figure>
    <!-- section>
      <h3>About</h3>
      <ul>
        <li><a href="#">Sign up for news updates</a></li>
        <li><a href="#">Career opportunities</a></li>
        <li><a href="#">Contact us</a></li>
      </ul>
    </section-->
  </div>
  <hr />
  <div id="utility-container">
    <div id="utility-footer">
	  <?php
				if ( has_nav_menu( 'footer-menu' ) ) {
					wp_nav_menu(
						array(
							'theme_location' => 'footer-menu',
							'caweb_nav_type'          => 'footer',
						)
					);
				} else {
					?>
					<a>There is no Navigation Menu set</a>
					<?php
				}
				?>
    </div>
    <div id="social-sharing">
		<?php require_once CAGOV_DESIGN_SYSTEM_DIR . "/parts/$mode/socialshare.php"; ?>
    </div>
  </div>
  <div id="publishing">
  	<?php if ( $cagov_design_system_is_caweb_plugin_active ) : ?>
		<p>Powered by: CAWeb Publishing Service</p>
	<?php endif; ?>
    <p><span aria-hidden="true">&copy;</span> Copyright <script>document.write(new Date().getFullYear())</script></p>
  </div>
</footer>