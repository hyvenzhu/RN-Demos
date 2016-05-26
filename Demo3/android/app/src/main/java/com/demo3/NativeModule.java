package com.demo3;

import android.support.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

/**
 * Callback回调用法
 * @author hiphonezhu@gmail.com
 * @version [android, 2016-05-24 20:27]
 */
public class NativeModule extends ReactContextBaseJavaModule {
    ReactApplicationContext mReactContext;
    public NativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        mReactContext = reactContext;
    }

    @Override
    public String getName() {
        return "NativeAndroid";
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

    /**
     * 发送事件到JS
     * [为了简单演示，从JS调用此方法再发送事件到JS]
     */
    @ReactMethod
    public void testEvent()
    {
        new Thread(new Runnable() {
            @Override
            public void run() {
                try {
                    Thread.sleep(3000);
                    mReactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                            .emit("testEvent", "Event: " + Thread.currentThread().getName() + " has slept 3 ms.");
                } catch (InterruptedException e) {
                }
            }
        }).start();
    }
}
