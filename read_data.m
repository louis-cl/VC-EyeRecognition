function data = read_data(data_dir)
    imf = dir(strcat(data_dir, '*.pgm')); % llista d'imatges amb extensio bmp
    n = length(imf); % nombre d'imatges en el directori
    %images = zeros([n,100,100]); % array n imatges de mida 100 x 100
    n = 100;
    data = cell(1,n);
    looking_column = read_looking_data('Miram.xlsx');

    for i = 1 : n
         name = imf(i).name;
         name_eye = strcat(data_dir, name(1:end-3),'eye');

         im = imread(strcat(data_dir, name));

         s = size(im);
         l = length(s);
         if l == 3 
             im = rgb2gray(im);
         end

%         images(i,:,:) = imresize(im,[100 100]);
         data{i}= struct('image', im, 'eyepos', readEye(name_eye), 'looking', looking_column(i));
    end

    % mostrem les imatges
    %for index = 1 : 10
    %    I =  uint8(squeeze(images(index,:,:))); % squeeze elimina les dimensions que tenen mida 1 (singletons)
    %    imshow(I,[]);
    %end   

    function M = readEye(filename)
        M = reshape(dlmread(filename,'', 1,0),[2,2])'; 
    end
end
