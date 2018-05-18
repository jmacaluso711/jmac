---
path: "/evolution-datagrid"
date: "2018-05-06"
title: "Evolution of a datagrid // Prototype"
category: "Prototype"
tags:
externalLink:
techStack: "html (pug.js) // PostCSS // js // Gulp"
icon: "./icons/datagrid.svg"
---

I worked with a small team of UX designers tasked with re-designing the experience of Infor’s Order Collaboration tool. We decided to take a step by step approach in an effort to prove our solution was technically feasible. The end results was a final prototype that could be used for user testing and ultimately implementation by our product team. The key challenge for me was to create these examples without the use of any 3rd party libraries.

##Step 1 // Sticky column
This simple first step was an effort to show how a sticky column could be implemented with table based markup.
<div class="video-wrapper">
  <svg width="40" height="40" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg" fill="#c3c3c3c3">
      <circle cx="12.5" cy="12.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="0s" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5">
          <animate attributeName="fill-opacity"
          begin="100ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="52.5" cy="12.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="300ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="52.5" cy="52.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="600ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="92.5" cy="12.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="800ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="92.5" cy="52.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="400ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="12.5" cy="92.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="700ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="52.5" cy="92.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="500ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="92.5" cy="92.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="200ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
  </svg>
  <video width="100%" height="560px" src="https://www.dropbox.com/s/sn75x7rc333qu0r/datagrid-col-stick.mov?raw=1" controls></video>
</div>

##Step 2 // Expanding + sticky rows
Next, I needed to combined expandable rows with sticky rows.
<div class="video-wrapper">
  <svg width="40" height="40" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg" fill="#c3c3c3c3">
      <circle cx="12.5" cy="12.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="0s" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5">
          <animate attributeName="fill-opacity"
          begin="100ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="52.5" cy="12.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="300ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="52.5" cy="52.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="600ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="92.5" cy="12.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="800ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="92.5" cy="52.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="400ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="12.5" cy="92.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="700ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="52.5" cy="92.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="500ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="92.5" cy="92.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="200ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
  </svg>
  <video width="100%" height="560px" src="https://www.dropbox.com/s/7k4pte2v2sxix9x/datagrid-expand-stick.mov?raw=1" controls></video>
</div>

##Step 3 // Expanding + sticky rows &amp; columns
After successfully combining expandable rows and sticky rows it was time to add the sticky side column back in.          
<div class="video-wrapper">
  <svg width="40" height="40" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg" fill="#c3c3c3c3">
      <circle cx="12.5" cy="12.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="0s" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5">
          <animate attributeName="fill-opacity"
          begin="100ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="52.5" cy="12.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="300ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="52.5" cy="52.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="600ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="92.5" cy="12.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="800ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="92.5" cy="52.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="400ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="12.5" cy="92.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="700ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="52.5" cy="92.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="500ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="92.5" cy="92.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="200ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
  </svg>
  <video width="100%" height="560px" src="https://www.dropbox.com/s/byo2tz0l0h8rfit/datagrid-row-col-stick.mov?raw=1" controls></video> 
</div>

##Step 4 // Final Prototype
And lastly, I needed to create the final prototype which included several other interactions.         
<div class="video-wrapper">
  <svg width="40" height="40" viewBox="0 0 105 105" xmlns="http://www.w3.org/2000/svg" fill="#c3c3c3c3">
      <circle cx="12.5" cy="12.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="0s" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="12.5" cy="52.5" r="12.5" fill-opacity=".5">
          <animate attributeName="fill-opacity"
          begin="100ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="52.5" cy="12.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="300ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="52.5" cy="52.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="600ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="92.5" cy="12.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="800ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="92.5" cy="52.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="400ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="12.5" cy="92.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="700ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="52.5" cy="92.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="500ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
      <circle cx="92.5" cy="92.5" r="12.5">
          <animate attributeName="fill-opacity"
          begin="200ms" dur="1s"
          values="1;.2;1" calcMode="linear"
          repeatCount="indefinite" />
      </circle>
  </svg>
  <video width="100%" height="560px" src="https://www.dropbox.com/s/b7ge7bqzyw3bqmd/datagrid-order-collab.mov?raw=1" controls></video>
</div>