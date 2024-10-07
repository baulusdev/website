
const viewer = new View360("#viewer", {
    projection: new View360.EquirectProjection({
      src: "/static/360/R0010750.JPG",
      video: false
    })
  });

  
  const viewer2 = new View360("#viewer2", {
    projection: new View360.EquirectProjection({
      src: "/static/360/R0010815_st.MP4",
      video: {
        autoplay: true,
        loop: true
      }
    })
  });