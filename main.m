% LOAD variable data
if ~exist('data', 'var') % reload only if needed
    addpath data;
    data = read_data('data\');
    n = length(data);
end

crop_size = [64 64];

% generate eye data, 1 row per eye
eye_class = 'eye';
eye_data = generate_eye_data(data, crop_size);
eye_data.class = repmat({eye_class}, height(eye_data), 1);

% generate non eye data, 1 row per non-eye
non_eye_per_image = 18;
non_eye_class = 'no-eye';
non_eye_data = generate_non_eye_data(data, non_eye_per_image, crop_size);
eye_data.class = repmat({non_eye_class}, height(eye_data), 1);

% separate training, testing data

% TODO train model
% Use ResponseVarName to specify label 'class'

% TODO test model