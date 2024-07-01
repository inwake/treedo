package com.treedo;

import com.treedo.BuildConfig;
import android.app.Application;
import android.util.Log;
import java.util.List;
import java.util.logging.Logger;
import java.lang.String;

import androidx.annotation.NonNull;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.PackageList;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactNativeHost;
import com.facebook.soloader.SoLoader;


import io.sentry.SentryLevel;
import io.sentry.android.core.SentryAndroid;

public class MainApplication extends Application implements ReactApplication {
    private final ReactNativeHost mReactNativeHost =
        new DefaultReactNativeHost(this) {

            @Override
            public boolean getUseDeveloperSupport() {
                return BuildConfig.DEBUG;
            }

            @Override
            protected List<ReactPackage> getPackages() {
                @SuppressWarnings("UnnecessaryLocalVariable")
                List<ReactPackage> packages = new PackageList(this).getPackages();
                // Packages that cannot be autolinked yet can be added manually here, for example:
                // packages.add(new MyReactNativePackage());
                for (Object packageObj : packages) {
                    Log.d("ReactNativeHost", packageObj.toString());
                }
                return packages;
            }

            @Override
            protected String getJSMainModuleName() {
                return "treedo";
            }

            @Override
            protected boolean isNewArchEnabled() {
                return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
            }

            @Override
            protected Boolean isHermesEnabled() {
                return BuildConfig.IS_HERMES_ENABLED;
        }
    };

    @NonNull
    @Override
    public ReactNativeHost getReactNativeHost() {
      // Log the string representation of mReactNativeHost
      Log.d("MainApplication", "mReactNativeHost: " + mReactNativeHost.toString());
      return mReactNativeHost;
    }

    @Override
    public void onCreate() {
      super.onCreate();

      // Log.d("ReactNativeHost", "ReactNativeHost constructor called. BuildConfig: " + com.treedo.BuildConfig.toString());

      SentryAndroid.init(this, options -> {
        options.setDsn("https://990137539e3716d54e0d2c09b9871b1f@o4507507944390656.ingest.de.sentry.io/4507507946684496");
        // Add a callback that will be used before the event is sent to Sentry.
        // With this callback, you can modify the event or, when returning null, also discard the event.
        options.setBeforeSend((event, hint) -> {
          if (SentryLevel.DEBUG.equals(event.getLevel()))
            return null;
          else
            return event;
        });
      });

      try {
        SoLoader.init(this, /* native exopackage */ false);

        Log.d("SoLoaderInit", "SoLoader initialization completed");
      } catch (Exception exception) {
        Log.e("SoLoaderInit", "SoLoader initialization failed", exception);
      }

      if (com.treedo.BuildConfig.IS_NEW_ARCHITECTURE_ENABLED)
        DefaultNewArchitectureEntryPoint.load(true, true, true);
  }
}
