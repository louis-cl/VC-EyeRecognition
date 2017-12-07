data = read_data('data\');
n = length(data);

% TODO separate training, testing data

% generate eye data, 1 row per eye
eye_data = [];
for i = 1:length(data)
    [e1, e2] = extract_eye_image(data{i}, [64 64]);
    de1 = generate_features(e1);
    de2 = generate_features(e2);
    eye_data = [eye_data; de1; de2];
end

% TODO generate non eye data, 1 row per non-eye
non_eye_data = [];

% TODO merge non-eye with eye data adding labels

% TODO train model

% TODO test model