function [features] = generate_features(im)
%   Generate an array of features describing an image
%   param im:           image to describe
%   return features:    struct of features
    
    fs = {@std2, @mean2, @extractLBPFeatures, @nice}; % stupid test features
    features = struct();
    
    for i = 1:size(fs,2)
        f = fs{i};
        finfo = functions(f);
        funresult = f(im);
        for j=1:size(funresult,2)
             name = strcat(finfo.function,int2str(j));
             features.(name) = funresult(j);
        end
    end
end

function [feat] = Hog (im) % Tarda molt i no millora massa els resultats
    feat = extractHOGFeatures(im);
    
end
function [feat] = nice(im)
    feat = sum(sum(im));
end

