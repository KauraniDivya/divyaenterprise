'use client';

import React, { useEffect, useRef } from 'react';

const ZoomImage = () => {
  const zoomWindowRef = useRef(null);

  useEffect(() => {
    const imageContainer = document.querySelector('.image-container');
    const productImage = document.querySelector('.product-image');
    const zoomWindow = zoomWindowRef.current;

    imageContainer.addEventListener('mousemove', (e) => {
      const containerRect = imageContainer.getBoundingClientRect();
      const containerX = containerRect.left;
      const containerY = containerRect.top;

      const mouseX = e.clientX - containerX;
      const mouseY = e.clientY - containerY;

      const zoomLevel = 2; // Adjust this value to control the zoom level

      const imageWidth = productImage.offsetWidth;
      const imageHeight = productImage.offsetHeight;

      const zoomedWidth = imageWidth * zoomLevel;
      const zoomedHeight = imageHeight * zoomLevel;

      const offsetX = (zoomedWidth - imageWidth) / 2;
      const offsetY = (zoomedHeight - imageHeight) / 2;

      const positionX = (mouseX / imageWidth) * (imageWidth - zoomedWidth) + offsetX;
      const positionY = (mouseY / imageHeight) * (imageHeight - zoomedHeight) + offsetY;

      productImage.style.transform = `translate(-${positionX}px, -${positionY}px) scale(${zoomLevel})`;

      // Update the zoom window
      const zoomWindowWidth = zoomWindow.offsetWidth;
      const zoomWindowHeight = zoomWindow.offsetHeight;
      const zoomWindowX = e.clientX + 10; // Adjust the offset as needed
      const zoomWindowY = e.clientY + 10; // Adjust the offset as needed

      zoomWindow.style.backgroundImage = `url(${sample.src})`;
      zoomWindow.style.backgroundSize = `${zoomedWidth}px ${zoomedHeight}px`;
      zoomWindow.style.backgroundPosition = `-${positionX}px -${positionY}px`;
      zoomWindow.style.backgroundRepeat = 'no-repeat';
      zoomWindow.style.left = `${zoomWindowX}px`;
      zoomWindow.style.top = `${zoomWindowY}px`;
    });
  }, []);

  return (
    <div className="zoom-window" ref={zoomWindowRef}></div>
  );
};

export default ZoomImage;