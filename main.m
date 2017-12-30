% LOAD variable data
if ~exist('data', 'var') % reload only if needed
    %addpath data;
    data = read_data('I:\vc\Short Project\');
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
non_eye_data.class = repmat({non_eye_class}, height(non_eye_data), 1);

% separate training, testing data
[ training_data, testing_data ] = split_data(eye_data, non_eye_data);

% train model
%model = fitcsvm(training_data, 'class');
model = TreeBagger(100,training_data,'class');
% Use ResponseVarName to specify label 'class'

% test model: precision, recall, accuracy
testing_noclass = testing_data;
testing_noclass.class = []; % remove class column
prediction = predict(model, testing_noclass);

conf_matrix = eval_prediction(prediction, testing_data.class)


% TODO : Normalizar lluminositat
% TODO : Generate vector features per passar ho



% read https://www.researchgate.net/publication/262987479_Efficient_eye_detection_using_HOG-PCA_descriptor
%COMPARACIONS
%Lluminositat normalitzada
%Classificador
%Descriptors