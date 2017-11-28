function [ img1,img2 ] = generate_eye_image( structElem,eyesize )
%UNTITLED2 Summary of this function goes here
%   Detailed explanation goes here
    d = pdist(structElem.eyepos,'euclidean');
    m = ceil(0.65*d/2);
    img1 = imcrop(structElem.image, [structElem.eyepos(1,:) - m, structElem.eyepos(1,:) + m]);
    img2 = imcrop(structElem.image, [structElem.eyepos(2,:) - m, structElem.eyepos(2,:) + m]);  
end

