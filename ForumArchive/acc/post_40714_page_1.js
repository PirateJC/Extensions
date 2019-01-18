[{"Owner":"JZ7878","Date":"2018-10-18T10:06:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi all_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried to create a plane with holes_co_ and I found the following seems good to me.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#4G18GY%236_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#4G18GY#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut when I did it via _lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_BABYLON.MeshBuilder.CreatePolygon_co_ I found that it will ignore the y value of all points_co_ so I am confused._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_If I want to create some shpes(any) with holes in it_co_ what_t_s the better way to do it_co_ or can I make CreatePolygon not ignore the y value?_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#000000_sm__qt__gt_Thanks in advance!_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ssaket","Date":"2018-10-18T12:56:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi there_co_  please go through the official documentation_co_ it covers all your questions (_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/parametric_shapes_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/parametric_shapes_lt_/a_gt_) \n_lt_/p_gt_\n\n_lt_p_gt_\n\tTL_sm_DR\n_lt_/p_gt_\n\n_lt_p_gt_\n\t For Non Regular Polygon/ Extruded Non Regular Polygon -&gt_sm_ the path should be in x0z plane.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand you can use extrude shapes in both z and y direction (ref - _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/parametric_shapes#extruded-shapes_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/parametric_shapes#extruded-shapes_lt_/a_gt_)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHope this helps_co_ happy learning _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ _lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-10-18T19:52:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFlagging as solved\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks a lot _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31816-ssaket/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31816_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31816-ssaket/_qt_ rel_eq__qt__qt__gt_@ssaket_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JZ7878","Date":"2018-10-19T00:59:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/31816-ssaket/?do_eq_hovercard_qt_ data-mentionid_eq__qt_31816_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/31816-ssaket/_qt_ rel_eq__qt__qt__gt_@ssaket_lt_/a_gt_   thanks you ! I will try to study how to do it from the links you send.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]