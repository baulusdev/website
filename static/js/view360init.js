
const viewer = new View360("#viewer", {
    projection: new View360.EquirectProjection({
      src: "/path/to/file",
      video: false
    })
  });

  
  const viewer2 = new View360("#viewer2", {
    projection: new View360.EquirectProjection({
      src: "path/to/file",
      video: {
        autoplay: true,
        loop: true
      }
    })
  });