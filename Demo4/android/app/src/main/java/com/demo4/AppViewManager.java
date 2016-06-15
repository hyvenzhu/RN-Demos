package com.demo4;

import android.content.Context;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.widget.SimpleAdapter;

import com.baoyz.swipemenulistview.SwipeMenu;
import com.baoyz.swipemenulistview.SwipeMenuCreator;
import com.baoyz.swipemenulistview.SwipeMenuItem;
import com.baoyz.swipemenulistview.SwipeMenuListView;
import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * 原生视图创建和管理类aa
 * @author hiphonezhu@gmail.com
 * @version [android, 2016-05-30 21:43]
 */
public class AppViewManager extends SimpleViewManager<SwipeMenuListView> {
    SimpleAdapter adapter;
    private Context mContext;
    @Override
    public String getName() {
        return "SwipeMenuListView";
    }

    @Override
    protected SwipeMenuListView createViewInstance(final ThemedReactContext reactContext) {
        mContext = reactContext;

        final SwipeMenuListView swipeMenuListView = new SwipeMenuListView(reactContext);

        // set creator
        swipeMenuListView.setMenuCreator(initMenu(reactContext));

        // bind menu click listener
        swipeMenuListView.setOnMenuItemClickListener(new SwipeMenuListView.OnMenuItemClickListener() {
            @Override
            public boolean onMenuItemClick(int position, SwipeMenu menu, int index) {
                switch (index)
                {
                    case 0: // delete menu
                        WritableMap map = Arguments.createMap();
                        map.putString("language", adapter.getItem(position).toString());
                        map.putString("position", String.valueOf(position));
                        // "topChange"事件在JS端映射到"onChange"，参考UIManagerModuleConstants.java
                        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(swipeMenuListView.getId()
                                , "topChange", map);
                        break;
                }
                return true;
            }
        });

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
     * 导出属性"array"给JS模块调用
     * @param swipeMenuListView
     * @param array
     */
    @ReactProp(name = "array")
    public void setDataSource(SwipeMenuListView swipeMenuListView, ReadableArray array)
    {
        List<Map<String, String>> list = new ArrayList<>();
        for(int i = 0; i < array.size(); i++)
        {
            HashMap<String, String> map = new HashMap<String, String>();
            map.put("desc", array.getString(i));
            list.add(map);
        }
        adapter = new SimpleAdapter(mContext, list,
                R.layout.layout_item, new String[]{"desc"}, new int[]{R.id.tv_desc});
        swipeMenuListView.setAdapter(adapter);
    }
}
