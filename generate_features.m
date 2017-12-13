function [features] = generate_features(im)
%   Generate an array of features describing an image
%   param im:           image to describe
%   return features:    struct of features
    
    fs = {@std2, @mean2}; % stupid test features
    features = struct();
    
    for i = 1:size(fs,2)
        f = fs{i};
        finfo = functions(f);
        features.(finfo.function) = f(im);
    end
end

