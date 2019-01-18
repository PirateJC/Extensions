[{"Owner":"MackeyK24","Date":"2018-05-14T09:36:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Guys... Here is a quick video to show the progress of my animation state machine for the the Babylon Toolkit. Basically i need help in calculating 2D blend tree child position weights.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease watch the video_dd_ _lt_a href_eq__qt_http_dd_//mackey.cloud/files/videos/u3dstates1.mp4_qt_ rel_eq__qt_external nofollow_qt__gt_Animation State Progress_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tListed are the signatures of the three computation functions i need help with. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tYo _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/?do_eq_hovercard_qt_ data-mentionid_eq__qt_20193_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/20193-sebavan/_qt_ rel_eq__qt__qt__gt_@Sebavan_lt_/a_gt_ and _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt_ and _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5482_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5482-davrous/_qt_ rel_eq__qt__qt__gt_@davrous_lt_/a_gt_ ... Please Watch this video and see if you can help with the three calculations... PLEASE _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_private computeSimpleDirectionalWeight(parentTree_dd_BABYLON.IBlendTree_co_ inputPosition_dd_BABYLON.Vector2_co_ childPosition_dd_BABYLON.Vector2)_dd_number {\n    var weight_dd_number _eq_ 0_sm_\n    var inputDistance_dd_number _eq_ inputPosition.subtract(childPosition).lengthSquared()_sm_\n    // var inputAngle_dd_number _eq_ BABYLON.Vector2.Angle(inputPosition_co_ childPosition)_sm_\n    // cosinus similarity from -1f to -1f shifted to 0 to 1f( same angle cosinus similarity_eq_0f and max opposite direction -1f)\n    // 1/d1+1/d2+1/d3...\n    // ..\n    // var inputAngle_dd_number _eq_ (BABYLON.Scalar.Clamp(BABYLON.Vector2.Dot(inputPosition.normalize()_co_ childPosition.normalize())_co_ -1_co_ 1)-1) * (-0.5)_sm_\n    // ..\n    // TODO_dd_ Calculate Weight based on input distance and angle - ???            \n    // ..\n    return weight_sm_\n}\nprivate computeFreeformDirectionalWeight(parentTree_dd_BABYLON.IBlendTree_co_ inputPosition_dd_BABYLON.Vector2_co_ childPosition_dd_BABYLON.Vector2)_dd_number {\n    var weight_dd_number _eq_ 0_sm_\n    var inputDistance_dd_number _eq_ inputPosition.subtract(childPosition).lengthSquared()_sm_\n    // var inputAngle_dd_number _eq_ BABYLON.Vector2.Angle(inputPosition_co_ childPosition)_sm_\n    // cosinus similarity from -1f to -1f shifted to 0 to 1f( same angle cosinus similarity_eq_0f and max opposite direction -1f)\n    // 1/d1+1/d2+1/d3...\n    // ..\n    // var inputAngle_dd_number _eq_ (BABYLON.Scalar.Clamp(BABYLON.Vector2.Dot(inputPosition.normalize()_co_ childPosition.normalize())_co_ -1_co_ 1)-1) * (-0.5)_sm_\n    // ..\n    // TODO_dd_ Calculate Weight based on input distance and angle - ???            \n    // ..\n    return weight_sm_\n}\nprivate computeFreeformCartesianWeight(parentTree_dd_BABYLON.IBlendTree_co_ inputPosition_dd_BABYLON.Vector2_co_ childPosition_dd_BABYLON.Vector2)_dd_number {\n    var weight_dd_number _eq_ 0_sm_\n    var inputDistance_dd_number _eq_ inputPosition.subtract(childPosition).lengthSquared()_sm_\n    // var inputAngle_dd_number _eq_ BABYLON.Vector2.Angle(inputPosition_co_ childPosition)_sm_\n    // cosinus similarity from -1f to -1f shifted to 0 to 1f( same angle cosinus similarity_eq_0f and max opposite direction -1f)\n    // 1/d1+1/d2+1/d3...\n    // ..\n    // var inputAngle_dd_number _eq_ (BABYLON.Scalar.Clamp(BABYLON.Vector2.Dot(inputPosition.normalize()_co_ childPosition.normalize())_co_ -1_co_ 1)-1) * (-0.5)_sm_\n    // ..\n    // TODO_dd_ Calculate Weight based on input distance and angle - ???            \n    // ..\n    return weight_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks soo much _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-05-17T06:29:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYo... There is gotta be someone_co_ one of you BabylonJS / Unity big dogs that gotta see where i am trying to go with the Animation State. All i need to know is how to calculate the input weight for each 2D Blend Tree Child Position (Vector2) based on the the current X and Y input parameter (Vector2). Thats all i need to re-create the a Unity-Like Mechanim Animation State machine for use in our BabylonJS game projects. Just a little help from the big dogs and we can get it out for everyone to use _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHelp a brotha out community_co_ remember its for community toolkit use _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-17T16:48:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tNo one? I can_t_t be the only one willing to help _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24012_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24012-mackeyk24/_qt_ rel_eq__qt__qt__gt_@MackeyK24_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gijs","Date":"2018-05-17T20:03:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Mackey_co_ I watched the video_co_ and I tried some things_co_ but to no avail... but then I found this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//answers.unity.com/questions/1206428/how-weights-of-2d-blending-are-calculated.html_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//answers.unity.com/questions/1206428/how-weights-of-2d-blending-are-calculated.html_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSeems like the answer is somewhere in there_co_ now you just gotta make sense of it _lt_span class_eq__qt_ipsEmoji_qt__gt_🤔_lt_/span_gt_ I wish I could be of more help_co_ because it_t_s a really nice project you are working on! Keep it up! _lt_span class_eq__qt_ipsEmoji_qt__gt_🙂_lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"MackeyK24","Date":"2018-05-17T20:15:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah i found the same article. That is how i am trying to calculate the inputAngle... But the C# code listed in the example does not seem to work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd those guys at Unity have that calculation code NESTED down in the C++ layer and cant see what they doing to calculate those input weights...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat just sucks _lt_span_gt__lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]