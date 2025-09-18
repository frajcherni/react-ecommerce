export const productSliderOption = {
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const viewModalSliderOption = {
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-image',
  dots: false,
  focusOnSelect: true,
};

// Mock madridFullSlider (assuming full-width product slider)
export const madridFullSlider = {
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};