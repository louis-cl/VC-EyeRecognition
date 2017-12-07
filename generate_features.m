function [features] = generate_features(im)
%   Generate an array of features describing an image
%   param im:           image to describe
%   return features:    1xN array of features (N features)
    
    fs = {@std2, @mean2}; % stupid test features
    features = [];
    
    for i = 1:size(fs,2)
        f = fs{i};
        feature = f(im);
        features = [features feature];
    end
end

