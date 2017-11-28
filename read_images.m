imf = dir('I:\vc\Short Project\*.pgm'); % llista d'imatges amb extensio bmp
n = length(imf); % nombre d'imatges en el directori
images = zeros([n,100,100]); % array n imatges de mida 100 x 100
data = cell(1,n);
n = 10;
for i = 1 : n
     name = imf(i).name;
     name_eye = strcat(name(1:end-3),'eye');
     
     im = imread(strcat('I:\vc\Short Project\', name));
    
     s = size(im);
     l = length(s);
     if l == 3 
         im = rgb2gray(im);
     end
     images(i,:,:) = imresize(im,[100 100]);
     data{i}= struct('image', im,'eyepos',readEye(name_eye),'looking',false);
     
end
% mostrem les imatges
for index = 1 : 10
I =  uint8(squeeze(images(index,:,:))); % squeeze elimina les dimensions que tenen mida 1 (singletons)
imshow(I,[]);
end   

function M = readEye(filename)
 M = reshape(dlmread(filename,'', 1,0),[2,2])'; 
end
