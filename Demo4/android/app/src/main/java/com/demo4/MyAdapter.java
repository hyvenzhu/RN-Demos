package com.demo4;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import java.util.List;

/**
 * @author hiphonezhu@gmail.com
 * @version [android, 2016-06-01 22:04]
 */
public class MyAdapter extends BaseAdapter {
    Context context;
    List<String> dataSource;
    public MyAdapter(Context context, List<String> dataSource)
    {
        this.context = context;
        this.dataSource = dataSource;
    }

    @Override
    public int getCount() {
        return dataSource.size();
    }

    @Override
    public String getItem(int i) {
        return dataSource.get(i);
    }

    @Override
    public long getItemId(int i) {
        return i;
    }

    @Override
    public View getView(int i, View view, ViewGroup viewGroup) {
        if (view == null)
        {
            view = LayoutInflater.from(context).inflate(R.layout.layout_item, null);
        }
        TextView tvDesc = (TextView)view.findViewById(R.id.tv_desc);
        tvDesc.setText(getItem(i));
        return view;
    }
}
