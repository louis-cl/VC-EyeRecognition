function [eye_data] = generate_eye_data(data, crop_size)
% GENERATE_EYE_DATA extract eye descriptor from a dataset
% param data: eye data cell array
% param crop_size: 2x1 of snippet size
% return eye_data: a table of descriptors
    eye_data = struct();
    first = true;
    for i = length(data):-1:1
        [e1, e2] = extract_eye_image(data{i}, crop_size);
        s1 = generate_features(e1);
        s2 = generate_features(e2);
        if first
           eye_data = s1;
           first = false;
        end
        eye_data(2*i-1) = s1;
        eye_data(2*i) = s2;
    end
    eye_data = struct2table(eye_data);
end

