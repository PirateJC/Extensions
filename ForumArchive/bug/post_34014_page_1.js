[{"Owner":"phaselock","Date":"2017-11-15T08:19:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ was testing my personal project_dd_ a low poly mesh with a few actions exported using the b2b exporter v5.4. The animation range in the start frames are off by 1. My actions start from frame 1_co_ exported babylon file shows frame 0 and testing confirms the animation when triggered doesn_t_t loop nicely. _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ Currently_co_ the mesh has 4~5 actions_co_ project upon completion should have a few hundred or so. Just curious_co_ is this bug from the exporter or blender ? Should I start thinking about coding a fix when ImportMesh is called from babylon ? Or is this like a quick 2s fix on the exporter ? Pls do not tell me that I have to edit it manually... _lt_img alt_eq__qt__dd_blink_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_blink.png_qt_ title_eq__qt__dd_blink_dd__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for reading and hope it helps_co_ cheers\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"phaselock","Date":"2017-11-15T11:59:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAfter a little more testing_co_ frame start seems to be more than just off by 1. I made a 3 frames action and did the below_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) If my action starts at frame 1 and ends at frame 3_co_ the ranges exported shows _qt_from_qt__dd_40_co__qt_to_qt__dd_43.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2) If my action starts at frame 0 and ends at frame 2_co_ the ranges exported shows _qt_from_qt__dd_40_co__qt_to_qt__dd_42.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t3) If my action starts at frame -1 and ends at frame 1_co_ the ranges exported shows_qt_from_qt__dd_40_co__qt_to_qt__dd_41.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t4) If my action starts at frame -2 and ends at frame 0_co_ the ranges exported shows _qt_from_qt__dd_40_co__qt_to_qt__dd_40.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t5) If my action starts at frame -3 and ends at frame -1_co_ the ranges exported shows _qt_from_qt__dd_40_co__qt_to_qt__dd_39.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tweird...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2017-11-15T17:45:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou should not expect the frames to line up.  I put gaps in just for sanity sake_co_ so it will be obvious the different ranges do not share a begin - end frame.  If you are calling by range name_co_ should not matter.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"phaselock","Date":"2017-11-16T02:43:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_195267_qt_ data-ipsquote-contentid_eq__qt_34014_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1510767943_qt_ data-ipsquote-userid_eq__qt_8492_qt_ data-ipsquote-username_eq__qt_JCPalmer_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t8 hours ago_co_ JCPalmer said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tYou should not expect the frames to line up.  I put gaps in just for sanity sake_co_ so it will be obvious the different ranges do not share a begin - end frame.  If you are calling by range name_co_ should not matter.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\toh_co_ I see_co_ understood_co_ thanks. Gonna go ahead and mark this as solved_co_ cheers.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]