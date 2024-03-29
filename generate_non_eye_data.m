function [non_eye_data] = generate_non_eye_data(data, non_eye_per_image, crop_size)
% GENERATE_NON_EYE_DATA extract non-eye descriptor from a dataset
% param data: eye data cell array
% param non_eye_per_image: number of non-eye to extract from the image
% param crop_size: 2x1 of snippet size
% return non_eye_data: a table of descriptors
    non_eye_data = struct();
    first = true;
    crop_size = crop_size - 1; % imcrop random behaviour
    for i = length(data):-1:1
        dt = data{i};
        % generate top-left points randomly; (X,Y) in image is (col, row)
        start_points = [randi(size(dt.image, 2) - crop_size(2), non_eye_per_image, 1),...
                        randi(size(dt.image, 1) - crop_size(1), non_eye_per_image, 1)];
        for j = 1:size(start_points, 1)
            % crop subimage
            img = imcrop(dt.image, [start_points(j,:), crop_size]);
            % generate descriptors
            des = generate_features(img);
            if first
                non_eye_data = des;
                first = false;
            end
            non_eye_data(non_eye_per_image*(i-1)+j) = des;
        end
    end
    non_eye_data = struct2table(non_eye_data);
end

