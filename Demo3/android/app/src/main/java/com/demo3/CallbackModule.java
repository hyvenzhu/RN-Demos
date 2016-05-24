package com.demo3;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;

/**
 * Callback回调用法
 * @author hiphonezhu@gmail.com
 * @version [android, 2016-05-24 20:27]
 */
public class CallbackModule extends ReactContextBaseJavaModule {
    public CallbackModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "CallbackAndroid";
    }

    @ReactMethod
    public void testCallback(final Callback callback)
    {
        new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    Thread.sleep(3000);
                    callback.invoke("Callback: " + Thread.currentThread().getName() + " has slept 3 ms.");
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            }
        }).start();
    }

    @ReactMethod
    public void testPromise(final Promise promise)
    {
        new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    Thread.sleep(3000);
                    WritableMap map = Arguments.createMap();
                    map.putString("msg", "Promise: " + Thread.currentThread().getName() + " has slept 3 ms.");
                    promise.resolve(map);
                } catch (InterruptedException e) {
                    promise.reject("InterruptedException", e);
                }
            }
        }).start();

    }
}
