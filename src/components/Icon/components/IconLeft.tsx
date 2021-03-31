
import * as React from 'react';
import BaseIcon, { BaseIconProps } from './BaseIcon';

const IconLeft: React.FC<BaseIconProps> = (props: BaseIconProps) => (
	<BaseIcon {...props} width="82" height="30" viewBox="0 0 82 30">
		<path d="M0.34 -9.53674e-07H6.2C6.97333 -9.53674e-07 7.67333 0.139999 8.3 0.42C8.92667 0.686666 9.46 1.05333 9.9 1.52C10.3533 1.97333 10.7 2.50667 10.94 3.12C11.18 3.73333 11.3 4.38 11.3 5.06C11.3 5.74 11.18 6.38667 10.94 7C10.7 7.61333 10.3533 8.15333 9.9 8.62C9.46 9.07333 8.92667 9.44 8.3 9.72C7.67333 9.98667 6.97333 10.12 6.2 10.12H3.58V14H0.34V-9.53674e-07ZM5.8 7.48C6.13333 7.48 6.44 7.41333 6.72 7.28C7 7.14667 7.23333 6.97333 7.42 6.76C7.62 6.53333 7.77333 6.27333 7.88 5.98C7.98667 5.68667 8.04 5.38 8.04 5.06C8.04 4.74 7.98667 4.43333 7.88 4.14C7.77333 3.84667 7.62 3.59333 7.42 3.38C7.23333 3.15333 7 2.97333 6.72 2.84C6.44 2.70667 6.13333 2.64 5.8 2.64H3.58V7.48H5.8ZM17.6753 11.64C18.022 11.64 18.3353 11.5733 18.6153 11.44C18.9086 11.3067 19.1553 11.1333 19.3553 10.92C19.5553 10.6933 19.7086 10.4333 19.8153 10.14C19.9353 9.83333 19.9953 9.51333 19.9953 9.18C19.9953 8.84667 19.9353 8.53333 19.8153 8.24C19.7086 7.94667 19.5553 7.68667 19.3553 7.46C19.1553 7.23333 18.9086 7.05333 18.6153 6.92C18.3353 6.78667 18.022 6.72 17.6753 6.72C17.3286 6.72 17.0153 6.78667 16.7353 6.92C16.4553 7.05333 16.2153 7.23333 16.0153 7.46C15.8153 7.68667 15.662 7.94667 15.5553 8.24C15.4486 8.53333 15.3953 8.84667 15.3953 9.18C15.3953 9.51333 15.4486 9.83333 15.5553 10.14C15.662 10.4333 15.8153 10.6933 16.0153 10.92C16.2153 11.1333 16.4553 11.3067 16.7353 11.44C17.0153 11.5733 17.3286 11.64 17.6753 11.64ZM23.0353 4.36V14H19.9953V12.64C19.8753 12.8667 19.7086 13.08 19.4953 13.28C19.2953 13.4667 19.062 13.6333 18.7953 13.78C18.542 13.9133 18.262 14.02 17.9553 14.1C17.6486 14.1933 17.342 14.24 17.0353 14.24C16.342 14.24 15.702 14.1133 15.1153 13.86C14.542 13.5933 14.0486 13.24 13.6353 12.8C13.222 12.3467 12.902 11.8133 12.6753 11.2C12.4486 10.5733 12.3353 9.9 12.3353 9.18C12.3353 8.46 12.4486 7.79333 12.6753 7.18C12.902 6.55333 13.222 6.02 13.6353 5.58C14.0486 5.12667 14.542 4.77333 15.1153 4.52C15.702 4.25333 16.342 4.12 17.0353 4.12C17.342 4.12 17.6486 4.16667 17.9553 4.26C18.262 4.34 18.542 4.45333 18.7953 4.6C19.062 4.74667 19.2953 4.92 19.4953 5.12C19.7086 5.32 19.8753 5.52667 19.9953 5.74V4.36H23.0353ZM35.9116 9.32C35.9116 9.98667 35.7916 10.62 35.5516 11.22C35.3116 11.82 34.9716 12.3467 34.5316 12.8C34.0916 13.2533 33.5516 13.6133 32.9116 13.88C32.2716 14.1333 31.5516 14.26 30.7516 14.26C29.9516 14.26 29.2249 14.14 28.5716 13.9C27.9182 13.6467 27.3449 13.26 26.8516 12.74C26.3316 12.18 25.9182 11.46 25.6116 10.58C25.3049 9.68667 25.1516 8.66 25.1516 7.5C25.1516 6.64667 25.2049 5.9 25.3116 5.26C25.4316 4.62 25.5849 4.06667 25.7716 3.6C25.9716 3.12 26.1916 2.72 26.4316 2.4C26.6849 2.06667 26.9449 1.78 27.2116 1.54C27.9049 0.913333 28.6849 0.499999 29.5516 0.299999C30.4182 0.099999 31.3582 -9.53674e-07 32.3716 -9.53674e-07H34.8316V2.72H32.1116C31.4716 2.72 30.8849 2.79333 30.3516 2.94C29.8316 3.08667 29.3849 3.33333 29.0116 3.68C28.6516 4.04 28.3582 4.5 28.1316 5.06C27.9182 5.62 27.7916 6.24 27.7516 6.92C28.0316 6.12 28.4916 5.51333 29.1316 5.1C29.7849 4.68667 30.5249 4.48 31.3516 4.48C32.0849 4.48 32.7382 4.61333 33.3116 4.88C33.8849 5.14667 34.3582 5.5 34.7316 5.94C35.1182 6.38 35.4116 6.89333 35.6116 7.48C35.8116 8.06667 35.9116 8.68 35.9116 9.32ZM30.6916 11.74C31.0382 11.74 31.3516 11.68 31.6316 11.56C31.9116 11.4267 32.1516 11.2467 32.3516 11.02C32.5516 10.7933 32.7049 10.5333 32.8116 10.24C32.9182 9.94667 32.9716 9.62667 32.9716 9.28C32.9716 8.94667 32.9182 8.63333 32.8116 8.34C32.7049 8.03333 32.5516 7.77333 32.3516 7.56C32.1516 7.33333 31.9116 7.15333 31.6316 7.02C31.3516 6.88667 31.0382 6.82 30.6916 6.82C29.9716 6.82 29.4049 7.05333 28.9916 7.52C28.5782 7.97333 28.3716 8.56 28.3716 9.28C28.3716 10 28.5782 10.5933 28.9916 11.06C29.4049 11.5133 29.9716 11.74 30.6916 11.74ZM42.5777 14.26C41.751 14.26 41.0043 14.1267 40.3377 13.86C39.6843 13.58 39.1243 13.2133 38.6577 12.76C38.2043 12.2933 37.851 11.7533 37.5977 11.14C37.3577 10.5267 37.2377 9.87333 37.2377 9.18C37.2377 8.48667 37.3577 7.83333 37.5977 7.22C37.851 6.60667 38.2043 6.07333 38.6577 5.62C39.1243 5.15333 39.6843 4.78667 40.3377 4.52C41.0043 4.24 41.751 4.1 42.5777 4.1C43.4177 4.1 44.1643 4.24 44.8177 4.52C45.4843 4.78667 46.0443 5.15333 46.4977 5.62C46.9643 6.07333 47.3177 6.60667 47.5577 7.22C47.811 7.83333 47.9377 8.48667 47.9377 9.18C47.9377 9.87333 47.811 10.5267 47.5577 11.14C47.3177 11.7533 46.9643 12.2933 46.4977 12.76C46.0443 13.2133 45.4843 13.58 44.8177 13.86C44.1643 14.1267 43.4177 14.26 42.5777 14.26ZM42.5777 11.64C42.9243 11.64 43.2377 11.58 43.5177 11.46C43.811 11.3267 44.0577 11.1467 44.2577 10.92C44.4577 10.6933 44.611 10.4333 44.7177 10.14C44.8377 9.84667 44.8977 9.52667 44.8977 9.18C44.8977 8.84667 44.8377 8.53333 44.7177 8.24C44.611 7.93333 44.4577 7.67333 44.2577 7.46C44.0577 7.23333 43.811 7.05333 43.5177 6.92C43.2377 6.78667 42.9243 6.72 42.5777 6.72C42.231 6.72 41.9177 6.78667 41.6377 6.92C41.3577 7.05333 41.1177 7.23333 40.9177 7.46C40.7177 7.67333 40.5643 7.93333 40.4577 8.24C40.351 8.53333 40.2977 8.84667 40.2977 9.18C40.2977 9.52667 40.351 9.84667 40.4577 10.14C40.5643 10.4333 40.7177 10.6933 40.9177 10.92C41.1177 11.1467 41.3577 11.3267 41.6377 11.46C41.9177 11.58 42.231 11.64 42.5777 11.64ZM55.0103 14V11.36H52.6703C51.577 11.36 50.7303 11.0867 50.1303 10.54C49.5303 9.98 49.2303 9.14667 49.2303 8.04V4.36H52.1903V7.76C52.1903 8.66667 52.657 9.12 53.5903 9.12H55.0103V4.36H57.9503V14H55.0103ZM62.9734 9.92C62.9868 10.2133 63.0268 10.4933 63.0934 10.76C63.1734 11.0133 63.2934 11.24 63.4534 11.44C63.6268 11.6267 63.8468 11.78 64.1134 11.9C64.3934 12.0067 64.7334 12.06 65.1334 12.06C65.6668 12.06 66.0668 11.9533 66.3334 11.74C66.6134 11.5267 66.8068 11.2667 66.9134 10.96H69.9134C69.8334 11.4133 69.6668 11.84 69.4134 12.24C69.1734 12.64 68.8468 12.9933 68.4334 13.3C68.0334 13.5933 67.5534 13.8267 66.9934 14C66.4468 14.1733 65.8268 14.26 65.1334 14.26C64.2934 14.26 63.5468 14.14 62.8934 13.9C62.2534 13.6467 61.7134 13.2933 61.2734 12.84C60.8334 12.3867 60.5001 11.8533 60.2734 11.24C60.0468 10.6133 59.9334 9.92667 59.9334 9.18C59.9334 8.47333 60.0401 7.81333 60.2534 7.2C60.4801 6.58667 60.8068 6.05333 61.2334 5.6C61.6734 5.13333 62.2134 4.76667 62.8534 4.5C63.4934 4.23333 64.2334 4.1 65.0734 4.1C65.8334 4.1 66.5134 4.22 67.1134 4.46C67.7268 4.7 68.2468 5.02 68.6734 5.42C69.1134 5.82 69.4468 6.28667 69.6734 6.82C69.9134 7.35333 70.0334 7.91333 70.0334 8.5C70.0334 8.7 70.0268 8.91333 70.0134 9.14C70.0001 9.36667 69.9668 9.62667 69.9134 9.92H62.9734ZM65.0334 6.14C64.4334 6.14 63.9401 6.31333 63.5534 6.66C63.1668 7.00667 62.9734 7.50667 62.9734 8.16H67.0134C67.0134 7.53333 66.8334 7.04 66.4734 6.68C66.1134 6.32 65.6334 6.14 65.0334 6.14ZM74.4969 9.92C74.5102 10.2133 74.5502 10.4933 74.6169 10.76C74.6969 11.0133 74.8169 11.24 74.9769 11.44C75.1502 11.6267 75.3702 11.78 75.6369 11.9C75.9169 12.0067 76.2569 12.06 76.6569 12.06C77.1902 12.06 77.5902 11.9533 77.8569 11.74C78.1369 11.5267 78.3302 11.2667 78.4369 10.96H81.4369C81.3569 11.4133 81.1902 11.84 80.9369 12.24C80.6969 12.64 80.3702 12.9933 79.9569 13.3C79.5569 13.5933 79.0769 13.8267 78.5169 14C77.9702 14.1733 77.3502 14.26 76.6569 14.26C75.8169 14.26 75.0702 14.14 74.4169 13.9C73.7769 13.6467 73.2369 13.2933 72.7969 12.84C72.3569 12.3867 72.0235 11.8533 71.7969 11.24C71.5702 10.6133 71.4569 9.92667 71.4569 9.18C71.4569 8.47333 71.5635 7.81333 71.7769 7.2C72.0035 6.58667 72.3302 6.05333 72.7569 5.6C73.1969 5.13333 73.7369 4.76667 74.3769 4.5C75.0169 4.23333 75.7569 4.1 76.5969 4.1C77.3569 4.1 78.0369 4.22 78.6369 4.46C79.2502 4.7 79.7702 5.02 80.1969 5.42C80.6369 5.82 80.9702 6.28667 81.1969 6.82C81.4369 7.35333 81.5569 7.91333 81.5569 8.5C81.5569 8.7 81.5502 8.91333 81.5369 9.14C81.5235 9.36667 81.4902 9.62667 81.4369 9.92H74.4969ZM76.5569 6.14C75.9569 6.14 75.4635 6.31333 75.0769 6.66C74.6902 7.00667 74.4969 7.50667 74.4969 8.16H78.5369C78.5369 7.53333 78.3569 7.04 77.9969 6.68C77.6369 6.32 77.1569 6.14 76.5569 6.14ZM13.7 29H10.9V21.6L8.18 29H5.88L3.1 21.6V29H0.3V19.36H4.76L7.02 25.66L9.3 19.36H13.7V29ZM18.6961 24.92C18.7094 25.2133 18.7494 25.4933 18.8161 25.76C18.8961 26.0133 19.0161 26.24 19.1761 26.44C19.3494 26.6267 19.5694 26.78 19.8361 26.9C20.1161 27.0067 20.4561 27.06 20.8561 27.06C21.3894 27.06 21.7894 26.9533 22.0561 26.74C22.3361 26.5267 22.5294 26.2667 22.6361 25.96H25.6361C25.5561 26.4133 25.3894 26.84 25.1361 27.24C24.8961 27.64 24.5694 27.9933 24.1561 28.3C23.7561 28.5933 23.2761 28.8267 22.7161 29C22.1694 29.1733 21.5494 29.26 20.8561 29.26C20.0161 29.26 19.2694 29.14 18.6161 28.9C17.9761 28.6467 17.4361 28.2933 16.9961 27.84C16.5561 27.3867 16.2228 26.8533 15.9961 26.24C15.7694 25.6133 15.6561 24.9267 15.6561 24.18C15.6561 23.4733 15.7628 22.8133 15.9761 22.2C16.2028 21.5867 16.5294 21.0533 16.9561 20.6C17.3961 20.1333 17.9361 19.7667 18.5761 19.5C19.2161 19.2333 19.9561 19.1 20.7961 19.1C21.5561 19.1 22.2361 19.22 22.8361 19.46C23.4494 19.7 23.9694 20.02 24.3961 20.42C24.8361 20.82 25.1694 21.2867 25.3961 21.82C25.6361 22.3533 25.7561 22.9133 25.7561 23.5C25.7561 23.7 25.7494 23.9133 25.7361 24.14C25.7228 24.3667 25.6894 24.6267 25.6361 24.92H18.6961ZM20.7561 21.14C20.1561 21.14 19.6628 21.3133 19.2761 21.66C18.8894 22.0067 18.6961 22.5067 18.6961 23.16H22.7361C22.7361 22.5333 22.5561 22.04 22.1961 21.68C21.8361 21.32 21.3561 21.14 20.7561 21.14ZM34.2795 23.14C34.2129 22.7133 34.0329 22.3667 33.7395 22.1C33.4595 21.8333 33.0062 21.7 32.3795 21.7C32.0195 21.7 31.6995 21.7667 31.4195 21.9C31.1529 22.0333 30.9329 22.2133 30.7595 22.44C30.5862 22.6667 30.4529 22.9333 30.3595 23.24C30.2795 23.5333 30.2395 23.8467 30.2395 24.18C30.2395 24.5133 30.2795 24.8333 30.3595 25.14C30.4529 25.4333 30.5862 25.6933 30.7595 25.92C30.9462 26.1467 31.1795 26.3267 31.4595 26.46C31.7529 26.5933 32.0995 26.66 32.4995 26.66C33.0329 26.66 33.4329 26.5533 33.6995 26.34C33.9662 26.1133 34.1662 25.7933 34.2995 25.38H37.3595C37.2795 25.9267 37.1195 26.44 36.8795 26.92C36.6395 27.3867 36.3129 27.7933 35.8995 28.14C35.4862 28.4867 34.9795 28.76 34.3795 28.96C33.7929 29.16 33.1195 29.26 32.3595 29.26C31.5195 29.26 30.7729 29.12 30.1195 28.84C29.4795 28.56 28.9395 28.1867 28.4995 27.72C28.0595 27.2533 27.7262 26.7133 27.4995 26.1C27.2862 25.4867 27.1795 24.8467 27.1795 24.18C27.1795 23.5133 27.2862 22.8733 27.4995 22.26C27.7262 21.6467 28.0595 21.1067 28.4995 20.64C28.9395 20.1733 29.4795 19.8 30.1195 19.52C30.7729 19.24 31.5195 19.1 32.3595 19.1C33.1729 19.1 33.8795 19.2133 34.4795 19.44C35.0795 19.6667 35.5795 19.9667 35.9795 20.34C36.3929 20.7133 36.7062 21.1467 36.9195 21.64C37.1462 22.12 37.2862 22.62 37.3395 23.14H34.2795ZM46.2114 19.36V21.82H43.5114V29H40.5714V21.82H37.8914V19.36H46.2114ZM52.0503 29.26C51.2236 29.26 50.477 29.1267 49.8103 28.86C49.157 28.58 48.597 28.2133 48.1303 27.76C47.677 27.2933 47.3236 26.7533 47.0703 26.14C46.8303 25.5267 46.7103 24.8733 46.7103 24.18C46.7103 23.4867 46.8303 22.8333 47.0703 22.22C47.3236 21.6067 47.677 21.0733 48.1303 20.62C48.597 20.1533 49.157 19.7867 49.8103 19.52C50.477 19.24 51.2236 19.1 52.0503 19.1C52.8903 19.1 53.637 19.24 54.2903 19.52C54.957 19.7867 55.517 20.1533 55.9703 20.62C56.437 21.0733 56.7903 21.6067 57.0303 22.22C57.2836 22.8333 57.4103 23.4867 57.4103 24.18C57.4103 24.8733 57.2836 25.5267 57.0303 26.14C56.7903 26.7533 56.437 27.2933 55.9703 27.76C55.517 28.2133 54.957 28.58 54.2903 28.86C53.637 29.1267 52.8903 29.26 52.0503 29.26ZM52.0503 26.64C52.397 26.64 52.7103 26.58 52.9903 26.46C53.2836 26.3267 53.5303 26.1467 53.7303 25.92C53.9303 25.6933 54.0836 25.4333 54.1903 25.14C54.3103 24.8467 54.3703 24.5267 54.3703 24.18C54.3703 23.8467 54.3103 23.5333 54.1903 23.24C54.0836 22.9333 53.9303 22.6733 53.7303 22.46C53.5303 22.2333 53.2836 22.0533 52.9903 21.92C52.7103 21.7867 52.397 21.72 52.0503 21.72C51.7036 21.72 51.3903 21.7867 51.1103 21.92C50.8303 22.0533 50.5903 22.2333 50.3903 22.46C50.1903 22.6733 50.037 22.9333 49.9303 23.24C49.8236 23.5333 49.7703 23.8467 49.7703 24.18C49.7703 24.5267 49.8236 24.8467 49.9303 25.14C50.037 25.4333 50.1903 25.6933 50.3903 25.92C50.5903 26.1467 50.8303 26.3267 51.1103 26.46C51.3903 26.58 51.7036 26.64 52.0503 26.64Z" fill="black"/>
	</BaseIcon>
);

export default React.memo<BaseIconProps>(IconLeft);
