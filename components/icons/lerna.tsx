import React from 'react';
import type { SVGProps } from 'react';

export function LernaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M499.186 277.54c-1.733 1.76.833 3.746 3.123 2.964c-4.673 6.777-10.744 7.051-14.41 4.431c-1.979-2.218 2.065-.812 5.286-.849c3.697-.042 6.62-1.873 6.217-2.766c-1.561-.452-3.38 1.532-5.874 1.328c-5.444-.445-12.324-1.711-12.42-3.847c-.067-1.091 1.13-4.283 2.036-3.957c1.268.892 1.5 2.607 2.38 2.803c.567.126 1.019-1.218 2.584-2.663c.62-.506.683-.16.683.21c0 .24.406.125 1.19-1.104c1.561-2.556-.524-8.196-2.958-10.736c-2.51-1.542.388-4.258 2.958-4.381c5.852-.516 1.173-5.788-4.93-3.396c-5.011 1.739-6.43 4.579-9.854 6.058c-4.263 1.843-5.754.917-7.988 1.806c-6.005 2.387-9.55 5.895-15.788 2.871c-4.614-1.995-2.277.658-.576 2.867c1.233 1.602 2.222 2.748-.191 3.706c-8.134 3.852-5.943-2.949-9.311-3.177c-7.176-7.531-1.972-38.341-32.645-46.886c-15.289-6.713-25.13-6.032-30.016-9.859c13.857-11.721 30.974 12.242 59.265 13.693c15.876.347 8.183 8.24 24.867 12.16c12.125 11.148 14.74 12.16 11.502-3.944c-.554-4.128-5.328-.806-7.34-4.053c-1.152-2.317 3.199-2.765 8.216 2.191c9.32 8.992 14.022-1.004 16.213 2.52c1.598 2.41 4.154-2.018 9.54-3.89c3.237-1.124 6.705-3.024 6.454-3.779c-.018-2.656-10.7-1.789-14.35-4.381c-3.835-3.342 1.14 4.235-2.63 5.696c-6.317 2.967-10.288-.365-15.446-5.04c5.569-3.496 6.902-4.605 6.025-1.752c-1.095 5.97 6.664-2.063 8.435-7.668c0-3.43 7.47-3.457 8.764-5.587c-.265-1.497-14.097-3.852-15.884-3.286c-8.025 1.287-11.265 3.293-13.365.11c-2.372-3.417-11.085-5.834-17.418-2.74c-4.83 2.012-10.487 1.748-13.004 2.262c-1.43.292-1.868 1.956-.689 2.449c4.546 3.314-11.544 2.903-18.404-.876c-4.026-3.136-8.34-.945-9.64-8.436c-2.122-8.599-3.218-1.273-7.34-6.134c-3.17-4.936-1.981-7.232 4.711-2.41c2.3 1.534 5.697 3.834 7.559 5.258c5.04 3.922 1.4 3.657 2.081 6.354c.705.685 3.23-.247 7.184-1.351c4.85-1.354 11.268-3.11 11.987-4.236c-.619-1.483-4.694-1.739-8.244-3.159c-2.51-1.004-4.86-1.58-6.18-1.653c-2.043.44-.77 3.313-4.55-.806c.754-1.575 8.402-.325 15.797-3.694c4.45-2.724 27.592-3.204 30.892-.219c8.134 3.93 7.382 1.84 5.696-2.629c-1.853-4.9-2.876-7.318-5.696-7.449c-2.992.35 5.292 4.047 3.779 9.644c-.546.827-1.114-5.39-4.874-5.152c-3.985.17-.39-2.226-1.096-6.245c-.767-2.656 5.19.938 13.146-7.558c2.861-3.383 5.566.828 5.258-5.697c.09-4.714 2.785-9.949 4.382-13.036c-3.446-2.116-8.963 6.536-14.35 9.093c-3.688 1.626-2.31 3.59 1.695 4.576c1.013 2.078-4.873 6.337-10.11 5.995c-5.456-.357-10.168-1.404-10.1-3.889c-.616-3.71 7.19-.459 7.56.438c1.889 2.937 4.49-1.034-.987-8.654c-4.998-6.86-4.86-3.095-5.477-6.025c.274-2.342 2.91-4.772 4.382-7.668c-1.164-1.589-3.731-.63-8.545 4.491c-8.64 8.709-8.572 14.94-18.842 20.047c-13.978-4.915-13.624-3.807-3.176 5.477c-7.23 3.383-9.187 1.412-11.095 2.224c-2.61 1.11-.646 2.09 7.15 5.225c-12.734-1.168-17.71-.118-17.892-1.898c.092-2.146 1.57-6.03 1.9-4.674c1.499 3.538 7.088.332 2.847-11.284c-1.307-3.961-3.156-4.619 6.683-10.406c1.38-.542 1.643-.439 1.643-1.096c-.727-1.499-4.923-1.39-8.978-.148c-3.422 1.048-5.44 3.348-8.988 3.434c-7.248 1.808-17.173 10.946-20.485 10.407c-1.522-1.28-3.38-4.12-5.368-7.558c-.641 2.632-1.261 5.378-2.3 5.915c-2.771-1.777-5.794-6.696-7.34-6.244c-3.273 8.668 2.068 12.16 1.205 15.008c-.996 3.263 5.796 2.718-.657 6.792c-8.613 6.38-14.51 7.584-13.255 1.205c.981-7.17 1.727 6.79 5.149-.329c1.57-8.782-4.82-17.363.876-18.623c7.723-3.76-7.887-4.309-13.803-.986c-4.648 2.022-6.151 2.374-12.379 2.191c4.872-3.883 12.83-5.577 22.286-8.906c4.034-1.42 8.304-4.97 11.345-5.663c5.25-1.58 25.104 10.15 25.086 5.696c-.053-1.485-1.969-3.538-2.799-5.921c-.9-2.588 0-4.493-1.802-6.896c-2.112-2.6 1.428.6 5.697-4.053c7.405-8.213 2.027 5.742 7.668-1.534c1.584-3.967.774-6.817 1.561-10.007c.677-2.74 4.004-3.613 5.012-5.877c-6.516-3.134-10.988 4.555-17.309 9.311c-2.326 1.565-.108 1.553.205 2.267c.409.93.948 1.812-5.792 2.006c-6.618-.402-8.124.42-8.763-3.944c.386-3.146 1.415-3.487 2.145-1.205c.373 1.165-.274 2.876 1.798.22c2.444-3.176.228-6.121 1.753-5.478c1.617 1.522.327 4.674 2.082 4.382c3.32-4.51 3.619-9.703-.439-16.87c-2.095-2.714 6.52-6.011 3.725-7.669c-6.595-2.406-14.396 9.622-22.786 15.227c-1.71-.167-2.192-2.495-4.272-1.753c-5.185 6.738-1.397 15.73-16.073 12.717c-1.733.12 6.22 5.133.298 6.564c-1.711-.014-5.933 3.478-4.272 2.848c.818-.298 1.83-.413 4.774 1.2c1.625.89 4.15 1.213 4.127 1.692c-.023.482-.795.871-1.561 1.49c-21.69 4.464-26.62 19.116-33.631 20.923c-2.656-.177.186-1.692-3.068-2.629c-3.851-.958.98 3.542-2.19 4.82c-4.914.26-11.42-5.257-14.899-11.393c1.748-6.07 2.865-1.02 7.669-.328c2.869.329 3.549 3.728 6.134 4.381c4.99-.847 4.748-10.705 3.396-14.57c-1.368-2.692-2.727.125-3.067-2.519c0-1.424.547-1.643 2.52-1.205c3.744.741 4.764-1.784 7.558-2.629c.548 0 .876.876.876 1.862c0 .959.086 1.318.605.972c5.05-5.437 14.228-4.952 13.828-8.969c-1.03-.758-16.4-3.128-19.581-2.08c-4.84 1.463 4.732 3.167.328 4.49c-5.535.733-8.328-.388-7.093-6.107c.127-.523.356-1.233.85-1.67c.656-.329 1.095 0 1.095.767c0 .985.657.766 1.862-.439c3.889-5.778-.459-13.001 5.04-14.898c3.628-1.777 3.9-2.834.766-3.834c-9.494-.9-10.795 4.418-13.912 4.71c-2.975.207-8.034 2.989-12.696 7.25c-.55.286-.67-.082-.67-1.005c-.841-6.484-11.93 7.522-16.979 2.52c-1.678-1.822-2.562-1.186-2.66.18c-.102 1.438.822 3.8-.298 3.544c-1.74-1.253-6.63 4.264-2.957 3.615c5.087-.397 6.73.561-2.849 5.039c-10.174 5.176-15.442 4.912-14.57 6.573c1.145 1.273 3.61 1.182 6.656 1.752c1.827.343 2.875 2.739 5.833 1.424c2.408-1.05 5.575-.74 8.983 0c-.615 5.151-.906 12.717 0 13.365c1.914.857.348-1.42 2.081-1.643c1.409.357 2.904 5.144 1.205 7.23c-2.104 2.103 1.658 1.94 2.848.438c1.8-2.584 2.7.023 3.835 2.191c2.205 5.028 3.117 2.064 4.71 4.71c1.942 2.517 7.043 4.79 12.379 6.464c1.862.328 1.753.548-.877 1.862c-4.856 2.683-1.858 4.169-4.491 5.806c-10.968 11.763-8.023 30.275 4.3 39.902c11.198 8.75 13.03 5.97 23.634 8.737c9.64 3.313 29.75 3.845 33.303 7.777c4.794 6.37 2.059 17.726-4.163 20.486c-26.803 4.308-60.397-11.393-70.767-46.01c-2.035-2.953 1.494-5.878.17-12.913c-3.214-7.486-4.02.38-7.4 4.697c-12.596-8-22.766-12.968-22.786-15.227c.442-2.943 3.91 4.509 7.34 2.41c5.464-4.906 2.983-13.095-8.545-25.853c-29.396-29.426-108.122-80.26-147.888-91.58c-2.19 0-3.176.438-2.957 1.314c9.457 8.456 20.873 10.453 31.549 24.648c-.936 2.177-7.204 3.212-7.668 4.93c.806 1.277 3.33.845 4.482 1.18c9.963 2.902 16.589 11.608 14.031 14.594c-3.17 2.872-10.08-.3-10.954 3.944c.553 1.6 2.69.032 9.64 3.615c15.851 9.336 17.683 20.46-2.849 12.488c-24.127-8.243-49.049-14.405-60.25-8.654c-10.205 4.62 8.726 2.104 18.951 7.45c4.608 3.088 4.636 3.54 1.205 5.477c-10.03 2.408-26.209 1.451-37.465 3.615c-5.97 1.753-9.65-.207-13.364 5.367c-.033 3.725 13.137-.574 21.69 1.315c4.567 1.501-.15 5.576-6.682 7.34c-21.204 5.932-41.238 9.43-45.572 14.022c-5.601 4.622-9.381 4.676-10.187 7.01c-.474 1.198-2.958.918 20.32-4.422c9.476-2.174 32.02-2.755 33.905-1.493c-.181 1.386-4.158 2.703-4.382 5.149c0 .933.331 1.203 2.13.812c17.59-5.314 45.578-3.533 55.802.301c3.193 1.198 3.481 5.264 3.305 7.65c.854 8.492-12.394 13.293-11.722 18.514c.924 3.42 1.976-.403 12.489-2.63c7.887-1.67 26.647 3.191 33.63 11.065c18.89 20.925 2.471 23.78-2.957 30.782c-.75 1.457-1.082 3.114.16 4.718c1.577.884 4.988-4.622 16.82-4.937c8.366 1.137 27.502 12.16 29.358 15.337c-39.928 20.024-75.294 34.429-90.06 31.942c-17.936-7.834-48.703-17.091-61.67-30.272c-.284-1.652 13.774 2.09 20.493 8.737c-2.079-18.092-23.082-16.316-30.11-29.597c-3.384-6.397-2.398-21.78-4.507-31.968c-.677-1.072-1.521-1.775-1.885-1.295c-2.579 3.403-6.276 25.997-6.44 36.678c-.243 10.278 4.957 24.1 9.86 36.698c1.803-1.393 3.66-8.252 3.285-15.336c23.26 26.017 36.771 25.56 43.856 32.465c-39.024 12.51-50.303 31.406-51.852 53.967c-5.441 24.392 22.858 55.248 76.682 42.285c7.495-2.582 11.266 11.658 23.093 11.393c1.687.023 4.32-4.923 4.403.766c-.31 3.863 4.227 3.273 4.492.767c.41-5.545-1.368-6.724 2.738-6.025c5.843 1.269 4.839-6.628 7.011.11c1.193 3.659 2.701 3.661 4.601-.877c.833-4.002-3.372-8.812-4.93-17.09c5.958 3.972 6.005 4.351 5.916 1.206c-.274-3.533-4.317-8.473-12.69-6.82c-3.696.731-5.263 3.366-10.205 5.067c-1.296.032-1.118 1.048-1.364 1.31c-1.237.8-3.838-.357-4.223-1.2c1.826-3.031 15.61-8.965 19.262-33.43c5.666-.963 13.487-.053 19.189-.42c7.19-.463 9.324-2.784 12.817-3.396c3.448 1.384-1.2 6.142-.438 8.545c2.117.342 10.858-2.903 10.482-11.496c.582-2.91 2.225-1.869 3.32-1.321c4.724 2.333 16.051.62 20.68 7.631c2.017 2.488.956 4.063-.413 4.31c-4.554.403-5.136 6.736-.439 8.106c6.703 1.985 9.75 1.164 10.845 6.463c.343 4.491 7.326.11 7.669 3.067c-.526 3.309 1.146 4.209 1.423 6.305c.192 1.453-2.519-.02-2.628 7.279c-.605 6.765 5.863 9.156 7.23 9.311c1.467.057 2.507-1.359.219-2.52c-1.452-1.115 3.991.357 7.449-3.066c4.556-5.897 13.686 1.288 25.245 8.04c3.785 1.6 5.52 1.545 13.425 6.53c9.42 6.723 10.763-8.18 13.036 3.395c.618 3.147 2.702 1.753 3.177-4.163c.543-8.75-3.254-6.27-.329-11.502c.737-1.679 1.623-2.848 2.496-2.711c1.336.21 3.458 1.73 4.296 3.259c2.51 4.683 3.834-2.712.329-7.559c-8.616-8.48-11.81-4.92-13.694-7.34c-.686-1.335 1.808-1.62 5.04 0c2.863 1.326 2.6-.027.109-3.286c-13.83-10.338-19.24 4.656-27.167 2.848c-19.307-8.356-30.892-18.433-24.306-42.713c1.502-4.388 6.018 1.229 7.106 1.271c2.315-.289.217-8.892-4.272-11.25c-5.111-2.52-8.12-8.284-12.707-10.064c-1.778-.69-4.656-.41-11.283-1.657c4.23-4.026 17.445-9.777 40.016-6.525c6.291.907 12.096 13.693 12.676 22.738c.499 9.763 3.16 13.462 4.615 13.078c5.032-4.814-.7-14.968 12.802-22.5c13.5 9.784 23.117 18.573 42.614 20.377c2.3.438 2.52.985 1.972 4.6c-3.503 16.953-.784 8.102 2.738 11.722c2.507 3.658-2.264 18.819 2.63 14.789c1.871-2.051 2.291-1.088 3.724 2.3c1.916 5.41.256 10.64 2.848 10.845c2.023-.045 2.493 5.936-.11 4.82c-4.615.212-8.11 4.766-6.706 11.063c.746 3.346 2.873 5.26 6.05 8.875c-.524-3.813-1.327-8.497-.825-9.115c1.059.15 2.24 2.183 4.998 2.779c3.077.665 7.113-.432 10.834 2.173c4.625 4.486 6.313 9.257 13.255 14.46c2.509 1.88 6.84 5.486 10.023 8.689c3.386 3.548 8.661-3.449 11.449-1.13c1.654 1.376-1.064 5.003-.75 6.038c.355 1.173 1.61.785 4.365-2.204c2.643-3.98 2.969-6.209 1.205-10.298c-.986-1.862-.767-1.971 2.52-1.424c4.262.61 5.075-.155 7.448-4.053c1.004-1.646 4.026-.301 4.163 2.958c.22 4.026 1.266 2.947 3.725.219c4.664-5.778-1.087-12.306-5.697-13.146c-5.684-1.498-.547-3.478-10.078-6.901c-8.317-3.442-8.362 1.169-16.213 1.643c-15.618-4.65-19.935-16.814-19.39-46.447c.532-6.956 4.371-5.547 4.382-1.096c.165 6.855 4.709-.929 4.382 8.216c-.654 9.25 4.647 1.107 6.573 8.435c2.21 5.748 2.648 1.752 6.025 5.04c2.577 2.59 3.04-.375 4.93 1.643c.903 2.807-7.895-2.089-10.955 8.544c-1.322 4.02 2.958 6.381 6.573 6.902c3.574.061-.158-1.582-.329-3.396c.719-1.267 2.978 1.06 5.916-.986c2.471-2.267 7.093 3.519 11.173 4.382c.767 0 1.534.766 1.863 1.533c8.298 7.988 19.289 19.27 24.1 17.966c5.055-.35 6.287-2.442 7.01 1.095c.882 5.06 6.471 1.306 5.369-3.834c-.776-5.665-3.3-9.609.219-9.092c2.34-.184 4.105-2.385 6.572-5.916c1.037 2.705 2.062 5.132 3.068 7.12c1.464-.064 2.018-2.057 2.41-6.134c.504-5.37-13.346-16.002-15.994-15.775c-4.605-.22-6.571 4.183-12.406 3.342c-6.52-.94-17.337-10.47-18.157-13.091c-9.23-21.006-20.184-41.272-17.09-47.762c3.677-15.434 8.356-15.599 9.174-20.442c1.48-8.762-2.039-12.295 2.11-17.242c14.371-10.047 22.091-18.86 24.976-28.044c2.769 4.649 7.23 17.644 14.002 28.767c-3.215.817-11.442 1.37-11.324 2.534c.086.86 9.43 1.666 16.493.577c5.567-1.038 1.99 1.153 5.148 1.643c4.898.348-2.48 4.601-6.333 9.461c-1.152 1.895 4.188 1.53 10.387-3.217c3.081-2.352 4.915-2.91 5.685-2.679c.776.232 1.449.55 2.312-2.14c.358-7.042 14.651 1.122 29.645 9.612c1.697 1.17 2.602 3.423 4.205 2.875c2.779-10.064-1.877-17.322 4.162-18.184c5.43-1.903 8.148-6.78 9.093-4.601c.401 2.037 3.5.03 3.615-4.053c.37-4.53 2.295-6.921 3.286-9.75c-1.114-1.198-9.503 5.197-12.814 8.27m-172.43-61.729c-9.667-1.835-26.235-4.665-28.481-15.227c.489-3.226 5.977-9.247 7.12-8.435c1.02 1.317-1.775 6.473-1.095 8.326c1.8 0 4.71-2.818 7.668-4.273c1.116.658-.287 5.108 2.191 5.478c.876 0 1.643.767 1.643 1.643c.595 2.33 4.3 6.58 10.517 11.393c1.533.876 1.634 1.245.438 1.095M76.992 357.674c2.155-.1 7.175-.1 3.177 5.696c-2.058 3.565-2.6 5.985.876 5.368c2.985-1.625.43 8.326-1.095 9.53c-7.924 3.725-37.992-7.821-38.122-13.693c1.41-10.078 23.656-28.11 39.874-30.454c.933-.303 3.481 12.634-2.957 17.418c-3.146 3.184-6.078 7.24-1.753 6.135"
      ></path>
    </svg>
  );
}
