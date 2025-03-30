import { FC } from 'react';

export const PaymentLogos: FC = () => {
  return (
    <div className="w-full py-6 bg-black">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-gray-300 mb-4">Paiement sécurisé par</h3>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {/* PayPal Logo */}
          <div className="h-10 bg-[#003087] px-4 py-2 rounded flex items-center">
            <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M33.643 7.337h-5.066c-.343 0-.64.254-.694.594l-2.05 12.975c-.04.256.157.488.417.488h2.456c.342 0 .64-.255.693-.594l.553-3.504c.054-.34.35-.594.693-.594h1.603c3.329 0 5.247-1.61 5.747-4.803.224-1.4.009-2.5-.638-3.27-.711-.847-1.969-1.292-3.714-1.292zm.583 4.736c-.276 1.814-1.66 1.814-2.997 1.814h-.761l.535-3.385c.032-.204.207-.355.414-.355h.349c.91 0 1.77 0 2.213.518.266.311.348.77.247 1.408zm13.953-.055h-2.465c-.206 0-.382.15-.414.355l-.106.673-.17-.245c-.524-.759-1.69-.101-2.85-.101-2.669 0-4.947 2.02-5.391 4.85-.23 1.415.097 2.77.895 3.716.733.869 1.775 1.23 3.018 1.23 2.132 0 3.314-1.37 3.314-1.37l-.107.665c-.4.256.157.489.417.489h2.22c.343 0 .64-.255.693-.594l1.309-8.282c.04-.256-.157-.488-.417-.488l.001-.001zm-3.43 4.706c-.233 1.38-1.33 2.307-2.725 2.307-.7 0-1.26-.225-1.62-.65-.358-.423-.493-1.025-.38-1.696.217-1.366 1.33-2.322 2.707-2.322.685 0 1.246.227 1.613.656.367.432.514 1.04.405 1.705zm17.181-9.387h-2.467c-.213 0-.41.106-.53.284L54.15 15.518l-2.032-6.75c-.09-.3-.367-.508-.685-.508h-2.426c-.293 0-.498.288-.404.566l3.83 11.245-3.598 5.078c-.225.318.003.756.39.756h2.464c.21 0 .405-.103.525-.276l11.565-16.696c.223-.322-.006-.758-.39-.758l.001.001z" fill="white"/>
              <path d="M13.89 7.337H8.824c-.343 0-.64.254-.694.594l-2.05 12.975c-.4.256.157.488.417.488h2.592c.241 0 .446-.175.484-.415l.582-3.684c.054-.34.35-.594.693-.594h1.603c3.329 0 5.247-1.61 5.747-4.803.224-1.4.009-2.5-.638-3.27-.711-.847-1.969-1.292-3.714-1.292h.044zm.583 4.736c-.276 1.814-1.66 1.814-2.997 1.814h-.761l.535-3.385c.032-.204.207-.355.414-.355h.349c.91 0 1.77 0 2.213.518.266.311.348.77.247 1.408zm13.953-.055H25.96c-.206 0-.382.15-.414.355l-.106.673-.17-.245c-.524-.759-1.69-.101-2.85-.101-2.669 0-4.947 2.02-5.391 4.85-.23 1.415.097 2.77.895 3.716.733.869 1.775 1.23 3.018 1.23 2.133 0 3.314-1.37 3.314-1.37l-.107.665c-.4.256.157.489.417.489h2.22c.343 0 .64-.255.693-.594l1.309-8.282c.04-.256-.157-.488-.417-.488l.001-.001zm-3.43 4.706c-.233 1.38-1.33 2.307-2.725 2.307-.7 0-1.26-.225-1.62-.65-.358-.423-.493-1.025-.38-1.696.217-1.366 1.33-2.322 2.707-2.322.685 0 1.246.227 1.613.656.367.432.514 1.04.405 1.705z" fill="white"/>
            </svg>
          </div>

          {/* PCI DSS Compliance Logo */}
          <div className="h-10 bg-[#333333] px-4 py-2 rounded flex items-center">
            <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5h8v2h-6v4h5v2h-5v6h-2V5zm11 0h4c1 0 1.8.2 2.4.6.6.4 1 .9 1.3 1.5.2.6.4 1.3.4 2 0 .8-.1 1.4-.4 2-.3.6-.7 1-1.3 1.4-.6.3-1.3.5-2.2.5h-2v5h-2V5zm4 6c.7 0 1.2-.2 1.5-.5.3-.3.5-.8.5-1.4 0-.6-.2-1-.5-1.4-.3-.3-.8-.5-1.5-.5h-2v3.8h2zm6.5 8V7h2v12h-2zm3.7-6.3c0-1.3.2-2.4.7-3.3.5-.9 1.2-1.6 2-2 .9-.5 1.9-.7 3-.7 1.7 0 3 .5 4 1.6 1 1 1.6 2.4 1.6 4.2 0 1.8-.5 3.2-1.6 4.3-1 1-2.4 1.6-4 1.6-1 0-2-.2-2.8-.7a5 5 0 01-2-2c-.6-1-.9-2-.9-3zm2.1-.2c0 1.1.3 2 .9 2.7.6.7 1.4 1 2.4 1 1 0 1.8-.3 2.4-1 .6-.7.9-1.6.9-2.8 0-1.2-.3-2.1-.9-2.8-.6-.7-1.4-1-2.4-1-1 0-1.8.3-2.4 1-.6.7-.9 1.6-.9 2.9z" fill="white"/>
              <path d="M55.5 5L59 19h-2l-.8-3h-3.8l-.7 3h-2L53 5h2.5zm-2.4 9h2.8l-1.4-6.5-1.4 6.5zm7.8-1.7V5h2v7.1L67 5h2.3l-4 6.8 4.3 7.2H67l-4.1-7.1V19h-2v-6.7zm10.6 0a7 7 0 01-.7-3 5 5 0 011.8-4 6 6 0 014.3-1.6c1.2 0 2.3.2 3.2.8.9.5 1.6 1.2 2 2.2H80c-.3-.6-.7-1-1.3-1.3-.6-.3-1.2-.4-1.9-.4-.6 0-1.1.1-1.6.3s-.9.5-1.2.8c-.3.4-.6.8-.7 1.3-.2.5-.3 1-.3 1.6 0 1.2.3 2.2 1 3 .6.7 1.5 1.1 2.7 1.1.7 0 1.4-.2 2-.5.6-.3 1-.8 1.3-1.4h-3v-1.9h5.1v6.9h-1.6l-.2-1.6c-.4.6-1 1-1.6 1.4-.6.3-1.3.5-2.2.5-1 0-1.8-.2-2.6-.6-.7-.4-1.4-1-1.8-1.7-.4-.7-.7-1.6-.7-2.6 0-1 .3-1.9.8-2.7.5-.8 1.2-1.4 2-1.8.9-.4 1.8-.7 2.9-.7 1 0 1.8.2 2.6.5.8.4 1.4.9 1.9 1.5.5.7.7 1.4.7 2.3h-2.3c0-.6-.3-1-.7-1.4-.4-.3-1-.5-1.7-.5-1 0-1.7.4-2.2 1-.5.8-.8 1.7-.8 2.8 0 1.1.3 2 .8 2.6.5.6 1.3 1 2.2 1 .6 0 1.2-.2 1.7-.5s.8-.8 1-1.4h-2.8v-1.9h5.1V19h-1.7l-.1-1.6c-.4.6-1 1-1.6 1.3-.6.4-1.3.6-2.1.6-1 0-1.9-.2-2.6-.6-.8-.4-1.4-1-1.8-1.8-.4-.8-.7-1.6-.7-2.6a5 5 0 01.8-2.7c.6-.8 1.3-1.4 2.1-1.8.9-.4 1.8-.6 2.8-.6 1 0 1.9.2 2.7.5.8.4 1.4.8 1.8 1.5.5.6.7 1.4.7 2.2 0-1 .3-1.8.8-2.6.5-.8 1.2-1.4 2-1.8.9-.4 1.8-.6 2.9-.6 1 0 1.8.1 2.6.5a4 4 0 011.9 1.5c.5.6.7 1.4.7 2.3H74c-.1-.6-.3-1-.7-1.4-.4-.3-1-.5-1.7-.5-.9 0-1.6.3-2.1 1-.5.7-.8 1.6-.8 2.8 0 1.1.3 2 .8 2.6.5.6 1.2 1 2.1 1 .7 0 1.2-.2 1.7-.5.5-.3.8-.8 1-1.4h-2.7v-1.9H77V19h-1.7l-.1-1.6c-.4.6-1 1-1.6 1.3-.6.4-1.3.6-2.1.6-1 0-1.9-.2-2.6-.6-.8-.4-1.4-1-1.8-1.8" fill="white"/>
            </svg>
          </div>

          {/* MasterCard Logo */}
          <div className="h-10 bg-[#EB001B] px-4 py-2 rounded flex items-center">
            <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_1_123)">
                <path d="M45 12C45 16.4183 41.4183 20 37 20C32.5817 20 29 16.4183 29 12C29 7.58172 32.5817 4 37 4C41.4183 4 45 7.58172 45 12Z" fill="#EB001B"/>
                <path d="M51 12C51 16.4183 47.4183 20 43 20C38.5817 20 35 16.4183 35 12C35 7.58172 38.5817 4 43 4C47.4183 4 51 7.58172 51 12Z" fill="#F79E1B"/>
                <path d="M40 5.6C38.1217 7.06048 37 9.36835 37 12C37 14.6316 38.1217 16.9395 40 18.4C41.8783 16.9395 43 14.6316 43 12C43 9.36835 41.8783 7.06048 40 5.6Z" fill="#FF5F00"/>
                <path d="M61.5 9h3.75v7.5h-3.75V9z" fill="white"/>
                <path d="M72.75 9v7.5h-2.625v-1.125c-.375.45-.825.787-1.35 1.012-.525.225-1.087.338-1.687.338-.6 0-.938-.15-1.5-.45-.563-.3-1.012-.713-1.35-1.237-.338-.525-.506-1.125-.506-1.8 0-.676.169-1.275.506-1.8.337-.526.787-.938 1.35-1.238.562-.3 1.2-.45 1.8-.45.6 0 1.162.113 1.687.338.525.225.975.562 1.35 1.012V9h2.625zm-3 5.063c.45 0 .825-.15 1.125-.45.3-.3.45-.675.45-1.125 0-.45-.15-.826-.45-1.126-.3-.3-.675-.45-1.125-.45-.45 0-.825.15-1.125.45-.3.3-.45.675-.45 1.126 0 .45.15.824.45 1.124.3.3.675.45 1.125.45z" fill="white"/>
              </g>
              <defs>
                <clipPath id="clip0_1_123">
                  <rect width="80" height="24" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          
          {/* Interac Logo */}
          <div className="h-10 bg-[#2273AA] px-4 py-2 rounded flex items-center">
            <svg width="80" height="24" viewBox="0 0 80 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6h12c3.3 0 6 2.7 6 6s-2.7 6-6 6H12c-3.3 0-6-2.7-6-6s2.7-6 6-6z" fill="#ECB93C"/>
              <path d="M50 6H38c-3.3 0-6 2.7-6 6s2.7 6 6 6h12c3.3 0 6-2.7 6-6s-2.7-6-6-6z" fill="#007BB8"/>
              <path d="M31 6h1v12h-1V6z" fill="white"/>
              <path d="M44 10v4h2v-4h1.5v6H46v-1c-.3.7-.9 1-1.6 1-1.5 0-2.4-1.3-2.4-3s.9-3 2.4-3c.7 0 1.3.3 1.6 1V10H44z" fill="white"/>
              <path d="M54 10v4h2v-4h1.5v6H56v-1c-.3.7-.9 1-1.6 1-1.5 0-2.4-1.3-2.4-3s.9-3 2.4-3c.7 0 1.3.3 1.6 1V10H54z" fill="white"/>
              <path d="M60 10v-1.5h-2V10h-1v1.5h1V14c0 1.4.8 2 2 2h1v-1.5h-.7c-.4 0-.6-.3-.6-.7V11.5H61V10h-1z" fill="white"/>
              <path d="M19 10v1h2.3l-2.5 5h6.4v-1h-2.3l2.5-5H19z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};