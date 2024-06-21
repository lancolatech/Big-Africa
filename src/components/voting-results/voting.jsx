import React from 'react';

const Voting = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 transform scale-85">
      {/* Left Container */}
      <div className="leftContainer">
        <div className="list bg-blue-50 w-[339px] h-[790px] py-5 rounded-2xl">
          <div className="card w-[309px] h-[132px] mx-auto mb-2 p-5 rounded-lg cursor-pointer bg-blue-50 hover:bg-white hover:shadow-md transition duration-300">
            <div className="chip one bg-green-100 text-blue-900 rounded-full w-[106px] h-[25px] flex items-center justify-center text-xs ml-3 mb-2">Vote average: 8</div>
            <h3 className="font-bold text-lg text-blue-900 ml-3 mt-2 mb-2">If you could choose any age, to stay in for the rest of your life, which would it be?</h3>
            <small className="text-gray-600 text-sm ml-3">Numerical・67 votes</small>
          </div>
          <div className="card active bg-white shadow-md my-2 rounded-lg cursor-pointer w-[309px] h-[132px] mx-auto p-5 transition duration-300">
            <div className="chip one bg-green-100 text-blue-900 rounded-full w-[106px] h-[25px] flex items-center justify-center text-xs ml-3 mb-2">Vote average: 9</div>
            <h3 className="font-bold text-lg text-blue-900 ml-3 mt-2 mb-2">How likely are you to answer to this question?</h3>
            <small className="text-gray-600 text-sm ml-3">Numerical・27 votes</small>
          </div>
          <div className="card bg-blue-50 w-[309px] h-[132px] mx-auto mb-2 p-5 rounded-lg cursor-pointer hover:bg-white hover:shadow-md transition duration-300">
            <div className="chip two bg-yellow-200 text-blue-900 rounded-full w-[106px] h-[25px] flex items-center justify-center text-xs ml-3 mb-2">Vote average: 6</div>
            <h3 className="font-bold text-lg text-blue-900 ml-3 mt-2 mb-2">Which languages do you speak?</h3>
            <small className="text-gray-600 text-sm ml-3">Numerical・27 votes</small>
          </div>
          <div className="card bg-blue-50 w-[309px] h-[132px] mx-auto mb-2 p-5 rounded-lg cursor-pointer hover:bg-white hover:shadow-md transition duration-300">
            <div className="chip three bg-pink-200 text-blue-900 rounded-full w-[106px] h-[25px] flex items-center justify-center text-xs ml-3 mb-2">Vote average: 3</div>
            <h3 className="font-bold text-lg text-blue-900 ml-3 mt-2 mb-2">Why did you decide to join this event today?</h3>
            <small className="text-gray-600 text-sm ml-3">Numerical・27 votes</small>
          </div>
          <div className="card bg-blue-50 w-[309px] h-[132px] mx-auto mb-2 p-5 rounded-lg cursor-pointer hover:bg-white hover:shadow-md transition duration-300">
            <div className="chip three bg-pink-200 text-blue-900 rounded-full w-[106px] h-[25px] flex items-center justify-center text-xs ml-3 mb-2">Vote average: 2</div>
            <h3 className="font-bold text-lg text-blue-900 ml-3 mt-2 mb-2">Which of the following statements are true?</h3>
            <small className="text-gray-600 text-sm ml-3">Numerical・27 votes</small>
          </div>
        </div>
      </div>

      {/* Right Container */}
      <div className="rightContainer ml-10">
        <div className="card-one bg-white shadow-md w-[362px] h-[327px] py-9 rounded-md ml-10">
          <h3 className="text-xl font-bold text-blue-900 ml-12 mb-6">Votes</h3>
          <div className="container ml-12 mt-5">
            <div className="topLabels flex justify-between w-[262px]">
              <label className="text-base text-blue-900">10</label>
              <label className="text-base text-blue-900">%36</label>
            </div>
            <div className="progress w-[262px] h-[15px] bg-blue-50 rounded-full overflow-hidden my-1">
              <div className="bar one h-[9px] w-[36%] bg-blue-900 rounded-full ml-1 mt-1"></div>
            </div>
            <label className="text-sm text-blue-900 ml-1">64 votes</label>
          </div>
          <div className="container ml-12 mt-5">
            <div className="topLabels flex justify-between w-[262px]">
              <label className="text-base text-blue-900">9</label>
              <label className="text-base text-blue-900">%47</label>
            </div>
            <div className="progress w-[262px] h-[15px] bg-blue-50 rounded-full overflow-hidden my-1">
              <div className="bar two h-[9px] w-[47%] bg-blue-900 rounded-full ml-1 mt-1"></div>
            </div>
            <label className="text-sm text-blue-900 ml-1">47 votes</label>
          </div>
          <div className="container ml-12 mt-5">
            <div className="topLabels flex justify-between w-[262px]">
              <label className="text-base text-blue-900">8</label>
              <label className="text-base text-blue-900">%17</label>
            </div>
            <div className="progress w-[262px] h-[15px] bg-blue-50 rounded-full overflow-hidden my-1">
              <div className="bar three h-[9px] w-[17%] bg-blue-900 rounded-full ml-1 mt-1"></div>
            </div>
            <label className="text-sm text-blue-900 ml-1">33 votes</label>
          </div>
        </div>

        <div className="cards flex mt-16 ml-10">
          <div className="card w-[269px] h-[117px] bg-white border border-blue-50 rounded-md flex items-center mr-4">
            <div className="icon one w-[60px] h-[60px] flex justify-center items-center ml-6 mr-4 bg-blue-100 rounded-full">
              <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14 21.1875L6.28496 25.2437L7.75871 16.6525L1.51746 10.5688L10.1425 9.31625L14 1.5L17.8575 9.31625L26.4825 10.5688L20.2412 16.6525L21.715 25.2437L14 21.1875Z" stroke="#202842" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="cont">
              <label className="text-base text-blue-900">Average rating</label>
              <h3 className="font-bold text-2xl text-blue-900">8.8</h3>
            </div>
          </div>

          <div className="card w-[269px] h-[117px] bg-white border border-blue-50 rounded-md flex items-center mr-4">
            <div className="icon two w-[60px] h-[60px] flex justify-center items-center ml-6 mr-4 bg-purple-100 rounded-full">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3.75" y="5" width="22.5" height="5" rx="2.5" stroke="#202842" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6.25 10V22.5C6.25 23.8807 7.36929 25 8.75 25H21.25C22.6307 25 23.75 23.8807 23.75 22.5V10" stroke="#202842" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.5 15H17.5" stroke="#202842" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="cont">
              <label className="text-base text-blue-900">Total votes</label>
              <h3 className="font-bold text-2xl text-blue-900">144</h3>
            </div>
          </div>

          <div className="card w-[269px] h-[117px] bg-white border border-blue-50 rounded-md flex items-center">
            <div className="icon three w-[60px] h-[60px] flex justify-center items-center ml-6 mr-4 bg-pink-100 rounded-full">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 7.5L7.5 22.5" stroke="#202842" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7.5 7.5L22.5 22.5" stroke="#202842" strokeWidth="1.875" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="cont">
              <label className="text-base text-blue-900">Total skipped</label>
              <h3 className="font-bold text-2xl text-blue-900">21</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voting;