[{"Owner":"hit2501","Date":"2015-10-05T15:52:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi everybody._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I checked this sample_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#9U086%2334_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#9U086#34_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This sample only can run in playground when you press _qt_Run_qt_ again but when I tried to run it in my pc (after _qt_get zip_qt_) the console shows me_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__qt_Uncaught SyntaxError_dd_ Unexpected token ILLEGAL_qt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I fixed a _qt__sm__qt_ that was missing but still gives me that error._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What am I doing wrong?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-10-05T16:59:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Not sure what the problem is_co_ but if you run it locally you can edit the source and add the html elements that are needed directly and not with the help of jQuery. I attached a version that should work._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_5270_qt__gt_babylonjs-plus-fabricjs-example.html_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hit2501","Date":"2015-10-05T17:45:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I tried like in your file but I must did something wrong because it didnt work for me._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Once again you save me iiceman._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_One more question_co_ do you know where I can find a example of move a texture (like in your file) but in a mesh imported from Blender?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you very much._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2015-10-05T19:49:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_hmm..maybe... something like that_dd_ _lt_a href_eq__qt_http_dd_//p215008.mittwaldserver.info/space_paint/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//p215008.mittwaldserver.info/space_paint/_lt_/a_gt_ (might load a while). Changing the texture like that only works with a dynamic texture. You cant do that only with blender. You would have to read the texture after importing the file_co_ draw that texture in a dynamic texture like in the example and assign the dynamic texture to the imported mesh again. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]