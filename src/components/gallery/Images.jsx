const imgStyles = `relative transition-all duration-300 after:absolute after:bottom-1/2 after:right-1/2 after:z-10 after:h-[80%] after:w-[80%] after:translate-x-1/2 after:translate-y-1/2 after:bg-red after:bg-opacity-0 after:transition-all after:duration-300 hover:scale-110 hover:after:bg-opacity-50 h-full w-full bg-cover bg-center`;

function Images() {
  return (
    <div className="grid h-[800px] w-full grid-cols-4 grid-rows-3 gap-1.5">
      {/* 01 */}
      <div className="col-start-1 col-end-3 row-start-1 row-end-3 overflow-hidden">
        <div
          className={`bg-[url('./images/gallery/img1.jpg')] ${imgStyles}`}
        ></div>
      </div>

      {/* 02 */}
      <div className="col-start-3 col-end-5 overflow-hidden">
        <div
          className={`bg-[url('./images/gallery/img2.jpg')] ${imgStyles}`}
        ></div>
      </div>

      {/* 03 */}
      <div className="overflow-hidden">
        <div
          className={`bg-[url('./images/gallery/img3.jpg')] ${imgStyles}`}
        ></div>
      </div>

      {/* 04 */}
      <div className="overflow-hidden">
        <div
          className={`bg-[url('./images/gallery/img4.jpg')] ${imgStyles}`}
        ></div>
      </div>

      {/* 05 */}
      <div className="col-start-3 col-end-5 row-start-2 row-end-4 overflow-hidden">
        <div
          className={`bg-[url('./images/gallery/img5.jpg')] ${imgStyles}`}
        ></div>
      </div>
      {/* 07 */}
      <div className="col-start-3 col-end-5 row-start-2 row-end-4 overflow-hidden">
        <div
          className={`bg-[url('./images/gallery/781A8155.jpg')] ${imgStyles}`}
        ></div>
      </div>
      {/* 08 */}
      <div className="col-start-3 col-end-5 row-start-2 row-end-4 overflow-hidden">
        <div
          className={`bg-[url('./images/gallery/img5.jpg')] ${imgStyles}`}
        ></div>
      </div>
      {/* 09 */}
      <div className="col-start-3 col-end-5 row-start-2 row-end-4 overflow-hidden">
        <div
          className={`bg-[url('./images/gallery/img5.jpg')] ${imgStyles}`}
        ></div>
      </div>
      {/* 10 */}
      <div className="col-start-3 col-end-5 row-start-2 row-end-4 overflow-hidden">
        <div
          className={`bg-[url('./images/gallery/img5.jpg')] ${imgStyles}`}
        ></div>
      </div>
      {/* 11 */}
      <div className="col-start-3 col-end-5 row-start-2 row-end-4 overflow-hidden">
        <div
          className={`bg-[url('./images/gallery/img5.jpg')] ${imgStyles}`}
        ></div>
      </div>
      {/* 12 */}
      <div className="col-start-3 col-end-5 row-start-2 row-end-4 overflow-hidden">
        <div
          className={`bg-[url('./images/gallery/img5.jpg')] ${imgStyles}`}
        ></div>
      </div>
    </div>
  );
}

export default Images;
