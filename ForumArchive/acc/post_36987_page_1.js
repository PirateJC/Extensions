[{"Owner":"babbleon","Date":"2018-04-12T12:08:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSay I have _lt_em_gt_ParentName_lt_/em_gt_ &gt_sm_ _lt_em_gt_ChildName1_lt_/em_gt_ &gt_sm_ _lt_em_gt_ChildName2_lt_/em_gt_ &gt_sm_ _lt_em_gt_ChildName3_lt_/em_gt__co_ is there a quick way to have Babylon tell me the name of the ultimate parent_co_ no matter which child I choose?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI can get immediate parent using...\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_scene.meshes[i].parent_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t... but I need to go right to the top.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2018-04-12T13:47:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ta recursive function_lt_br /_gt_\n\t_lt_br /_gt_\n\tgetLastParent(target){_lt_br /_gt_\n\tif(target.parent.parent){_lt_br /_gt_\n\treturn  getLastParent(target.parent)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t}else{_lt_br /_gt_\n\treturn target.parent\n_lt_/p_gt_\n\n_lt_p_gt_\n\t}_lt_br /_gt_\n\t}_sm__lt_br /_gt_\n\t_lt_br /_gt_\n\tor something like that.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babbleon","Date":"2018-04-12T14:24:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCheers buddy!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis sorted it with a small tweak_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_function getLastParent(target) {\n\tif (typeof target.parent !_eq_ _t_undefined_t_) {\n\t\tif (target.parent.parent) {\n\t\t\treturn getLastParent(target.parent)_sm_\n\t\t} else {\n\t\t\treturn target.parent.name_sm_\n\t\t}\n\t}\n}_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]