package com.demo4;

import android.content.Context;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.widget.ListView;
import android.widget.SimpleAdapter;

import com.baoyz.swipemenulistview.SwipeMenu;
import com.baoyz.swipemenulistview.SwipeMenuCreator;
import com.baoyz.swipemenulistview.SwipeMenuItem;
import com.baoyz.swipemenulistview.SwipeMenuListView;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 原生视图创建和管理类
 * @author hiphonezhu@gmail.com
 * @version [android, 2016-05-30 21:43]
 */
public class AppViewManager extends SimpleViewManager<SwipeMenuListView> {
    @Override
    public String getName() {
        return "SwipeMenuListView";
    }

    @Override
    protected SwipeMenuListView createViewInstance(final ThemedReactContext reactContext) {
        SwipeMenuListView swipeMenuListView = new SwipeMenuListView(reactContext);

        // set creator
        swipeMenuListView.setMenuCreator(initMenu(reactContext));

        // 设置适配器
        setAdapter(swipeMenuListView, reactContext);

        return swipeMenuListView;
    }

    /**
     * 初始化菜单
     * @param context
     * @return
     */
    SwipeMenuCreator initMenu(final Context context)
    {
        SwipeMenuCreator creator = new SwipeMenuCreator() {

            @Override
            public void create(SwipeMenu menu) {
                // create "open" item
                SwipeMenuItem openItem = new SwipeMenuItem(
                        context);
                // set item background
                openItem.setBackground(new ColorDrawable(Color.rgb(0xC9, 0xC9,
                        0xCE)));
                // set item width
                openItem.setWidth(100);
                // set item title
                openItem.setTitle("Open");
                // set item title fontsize
                openItem.setTitleSize(18);
                // set item title font color
                openItem.setTitleColor(Color.WHITE);
                // add to menu
                menu.addMenuItem(openItem);

                // create "delete" item
                SwipeMenuItem deleteItem = new SwipeMenuItem(
                        context);
                // set item background
                deleteItem.setBackground(new ColorDrawable(Color.rgb(0xF9,
                        0x3F, 0x25)));
                // set item width
                deleteItem.setWidth(100);
                // set a icon
                deleteItem.setIcon(R.drawable.ic_delete);
                // add to menu
                menu.addMenuItem(deleteItem);
            }
        };
        return creator;
    }

    /**
     * 初始化默认数据
     * @param listView
     * @param context
     */
    void setAdapter(ListView listView, Context context)
    {
        String[] strs = new String[]{"Java", "Objective-C", "C", "C++", "Ruby", "Python", "C#", "Swift", "JavaScript"
                , "Go"};
        List<Map<String, String>> list = new ArrayList<>();
        for(String str : strs)
        {
            HashMap<String, String> map = new HashMap<String, String>();
            map.put("desc", str);
            list.add(map);
        }
        listView.setAdapter(new SimpleAdapter(context, list,
                R.layout.layout_item, new String[]{"desc"}, new int[]{R.id.tv_desc}));
    }
}
