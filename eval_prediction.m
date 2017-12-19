function [ conf ] = eval_prediction(pred, truth)
% EVAL_PREDICTION compute evaluating metrics about the prediction
    % precision by class name

    conf = confusionmat(pred,truth);
    conf = conf/length(pred);
end

