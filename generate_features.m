function [features] = generate_features(im)
%   Generate an array of features describing an image
%   param im:           image to describe
%   return features:    struct of features
    
    fs = {
        @extractLBPFeatures,...
        @Hog,...
        @std2,...
        @mean2,...
%        @side_histogram,...
    };
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
    feat = extractHOGFeatures(im, 'CellSize', [32 32]);    
end

function [hs] = side_histogram(im)
    x = double(im);
    hs = [mean(x, 1) mean(x, 2)' std(x, 1, 1) std(x, 1, 2)'];
end