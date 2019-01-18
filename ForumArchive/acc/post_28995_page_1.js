[{"Owner":"hunts","Date":"2017-03-11T13:29:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__co_ how can I get the back camera to work here?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1R77YT%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#1R77YT%232_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"c75","Date":"2017-03-12T15:45:18Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think you should modify _lt_strong_gt_CreateFromWebCam _lt_/strong_gt_function and add to _lt_strong_gt_navigator.getUserMedia _lt_/strong_gt_ID of your cam\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/5dfa40ab8ccfb1ea31af53f72b5e4f66de8c759e/src/Materials/Textures/babylon.videoTexture.ts#L98_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/5dfa40ab8ccfb1ea31af53f72b5e4f66de8c759e/src/Materials/Textures/babylon.videoTexture.ts#L98_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_if (navigator.getUserMedia) {\n\t\t\t    navigator.getUserMedia({ \n\n                    video_dd_ {\n                        deviceId_dd_ {exact_dd_ VIDEO_SOURCE}_co_ // &lt_sm_&lt_sm_&lt_sm_&lt_sm_&lt_sm_&lt_sm_&lt_sm_&lt_sm_&lt_sm_&lt_sm_&lt_sm_\n                        width_dd_ {\n                            min_dd_ (constraints &amp_sm_&amp_sm_ constraints.minWidth) || 256_co_\n..._lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\treplace VIDEO_SOURCE with your camera ID. You can get devices list using _lt_strong_gt_navigator.mediaDevices.enumerateDevices_lt_/strong_gt_ function\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-13T20:23:30Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tThis should work directly. (It works for me on CHrome and Firefox). Do you have any error on the console?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"c75","Date":"2017-03-14T12:03:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_167072_qt_ data-ipsquote-contentid_eq__qt_28995_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1489436610_qt_ data-ipsquote-userid_eq__qt_4442_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t15 hours ago_co_ Deltakosh said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tThis should work directly. (It works for me on CHrome and Firefox). Do you have any error on the console?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tit_t_s run the FRONT camera _lt_em_gt_default_lt_/em_gt_ on android in chrome for me_co_ and to switch to another camera - video device ID must be added to getUserMedia constraints_co_ but `_lt_span style_eq__qt_color_dd_rgb(36_co_41_co_46)_sm_font-family_dd__t_SFMono-Regular_t__co_ Consolas_co_ _t_Liberation Mono_t__co_ Menlo_co_ Courier_co_ monospace_sm_font-size_dd_12px_sm_font-style_dd_normal_sm_font-weight_dd_normal_sm_letter-spacing_dd_normal_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_pre_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm_float_dd_none_sm__qt__gt_CreateFromWebCam_lt_/span_gt_` does not have this param\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-03-14T15:11:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOh ok...Do you want to submit a PR? (I can do it else but not now _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_)\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]