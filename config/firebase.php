<?php

declare(strict_types=1);

return [
    /*
     * ------------------------------------------------------------------------
     * Default Firebase project
     * ------------------------------------------------------------------------
     */

    'default' => env('FIREBASE_PROJECT', 'app'),

    /*
     * ------------------------------------------------------------------------
     * Firebase project configurations
     * ------------------------------------------------------------------------
     */

    'projects' => [
        'app' => [

            /*
             * ------------------------------------------------------------------------
             * Credentials / Service Account
             * ------------------------------------------------------------------------
             *
             * In order to access a Firebase project and its related services using a
             * server SDK, requests must be authenticated. For server-to-server
             * communication this is done with a Service Account.
             *
             * If you don't already have generated a Service Account, you can do so by
             * following the instructions from the official documentation pages at
             *
             * https://firebase.google.com/docs/admin/setup#initialize_the_sdk
             *
             * Once you have downloaded the Service Account JSON file, you can use it
             * to configure the package.
             *
             * If you don't provide credentials, the Firebase Admin SDK will try to
             * auto-discover them
             *
             * - by checking the environment variable FIREBASE_CREDENTIALS
             * - by checking the environment variable GOOGLE_APPLICATION_CREDENTIALS
             * - by trying to find Google's well known file
             * - by checking if the application is running on GCE/GCP
             *
             * If no credentials file can be found, an exception will be thrown the
             * first time you try to access a component of the Firebase Admin SDK.
             *
             */

             'credentials' => [
                "type" => "service_account",
                "project_id" =>  "smart-invent",
                "private_key_id" =>  "0459e60b6885faeb6499fffa3cb10f8c01567e7e",
                "private_key" =>  "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCdrIcngcPxsLqB\nf+HkSCf1VZd0+acFVkc+9OpFVijag0TvmgkVRv/RSyY7THFiTBu+lO9/d0d2H0Ju\ndR/r27p83cSkz33jMIBsg5FqR598N9a/PgNapDaWmbwzOJjzA7i8ZkmJkp4EZwn4\nEXSOLRbl23409tVo9HmMmF058QJOqFDmtwHbtwtT31JKE5L5gajS0GtOHvP+Lu0M\nY+2Sh4zQntT+uIiz5rFm/L6aOZOf6sxhT/Qo/+rofSAn0xg2C5OXeL6UlVL2ff3f\n+bqwF8y3+1Pvp245mibyaPkPVTHvuU0YG/swncHWBynxVyHs7UM8jPUWpIPcSQmm\nTnVpMxXJAgMBAAECggEAATCF0muA3V6uBvzEQFsUAS/xAjE1tRMT5u8TxUvquTbC\n0PLDNgHzpCxVN+SgrbkOf4c+5QqtFLqgDcrfMR7/dhyQ15FguMfcjaCqBmQ35NR+\nvjGSavOTnWY0qEGiKwqjcRZtpjDZxwV/h96PHbZMJS1Loe9AhVTkHQw5UL16Qt1q\nr0Pd50/x/Jqrc547QPrWTdAhxBHRTTfQGAR48v+TothsxcpZdc5WmOSbylvBzAMd\nARLWlm3bNsoU9u6ekORpB/kw55Mv0xTUB7JE0vqmNJ0BF3ot5TaI7ACPMvIq7O5E\nMs92GnEVMCyMVgGsuhPgRs2ZwZCAm7HSdGNv57eWRQKBgQDLQP6f1NzhMbuyfrCR\n8nAPnqsi5739e7PxvA7IKRkjHMfiHMlCqxsjqP/9Rzb50z6W7pZ2HKcgNn8qH5nt\n+EVpPIM7fcbSn43qgwSqjJg2bxGZEHrenLhW/qqriWf9vCsmjUmNLrMRdrB1RaZB\nC/pNv6+8+B3PhgTb8LmObh10TQKBgQDGl3eBFRYwNAnrNzwApcaZWXtGA0ECrqqk\nmvBgInLZpqDpGSedmPfHVGvWsv7xa+WdDrxx5TC+Z8BPPtDfFq7q3BjjpOjdhCzL\n7xhOvgqzLdhicwJJrRAnMzb3s17oiHazqhNrMrzPqJAFBoehZ3G+8njuImqz585z\nYYw7DLdVbQKBgQCpqoiifTsglLZdCtp0Ck+3CjlLeu2i0odkbBpexcfhAp5sRqFO\nkKyn+OQv1imzI76kmWdqEwMDpdpDHHwPJOc0MLpPh+/XVC9QKqxTfed10QN8pUAb\n4fETVaS8aogvS8stdFWIkAoUsuIcEtb0h34bNr8JXIjt+a7Gtkz+8zaNJQKBgDBD\nKTjGniDS1MJEJyHlJ9GmzG2kZs03E6NzQA2s8Ypxk1Ny2IzVWwonOxnvYEPdu+yi\nYyuuzlzHrBXWJz7ALXxIRwgz0J/c+mIJVjf0uXb4IkkyuBCdrXpJWQdzoRIT7/0T\nzSpVJ0u0JGQERTv1ftAv7zG4TYQxRpwFzeWf3oI1AoGBAJng+L3uvB9Ivo2eNB6k\nDRyNQWFuzo3O//xipbdXIXbmLQonDJ+eNKs4LJmiGdwmWms23Fggf5cRLllkbj73\nYEnWDhD/NEQXZJe80y+aBR+ztJQPEN3i0inYrubFQKj6K2GBdFTN3Y69TrjBgicN\nsodpJrXzzYDDyCwJaomZvMuD\n-----END PRIVATE KEY-----\n",
                "client_email" =>  "firebase-adminsdk-q75tv@smart-invent.iam.gserviceaccount.com",
                "client_id" =>  "102565118949297318355",
                "auth_uri" =>  "https://accounts.google.com/o/oauth2/auth",
                "token_uri" =>  "https://oauth2.googleapis.com/token",
                "auth_provider_x509_cert_url" =>  "https://www.googleapis.com/oauth2/v1/certs",
                "client_x509_cert_url" =>  "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-q75tv%40smart-invent.iam.gserviceaccount.com",
                "universe_domain" =>  "googleapis.com"
             ],

            /*
             * ------------------------------------------------------------------------
             * Firebase Auth Component
             * ------------------------------------------------------------------------
             */

            'auth' => [
                'tenant_id' => env('FIREBASE_AUTH_TENANT_ID'),
            ],

            /*
             * ------------------------------------------------------------------------
             * Firestore Component
             * ------------------------------------------------------------------------
             */

            'firestore' => [

                /*
                 * If you want to access a Firestore database other than the default database,
                 * enter its name here.
                 *
                 * By default, the Firestore client will connect to the `(default)` database.
                 *
                 * https://firebase.google.com/docs/firestore/manage-databases
                 */

                // 'database' => env('FIREBASE_FIRESTORE_DATABASE'),
            ],

            /*
             * ------------------------------------------------------------------------
             * Firebase Realtime Database
             * ------------------------------------------------------------------------
             */

            'database' => [

                /*
                 * In most of the cases the project ID defined in the credentials file
                 * determines the URL of your project's Realtime Database. If the
                 * connection to the Realtime Database fails, you can override
                 * its URL with the value you see at
                 *
                 * https://console.firebase.google.com/u/1/project/_/database
                 *
                 * Please make sure that you use a full URL like, for example,
                 * https://my-project-id.firebaseio.com
                 */

                'url' => env('FIREBASE_DATABASE_URL'),

                /*
                 * As a best practice, a service should have access to only the resources it needs.
                 * To get more fine-grained control over the resources a Firebase app instance can access,
                 * use a unique identifier in your Security Rules to represent your service.
                 *
                 * https://firebase.google.com/docs/database/admin/start#authenticate-with-limited-privileges
                 */

                // 'auth_variable_override' => [
                //     'uid' => 'my-service-worker'
                // ],

            ],

            'dynamic_links' => [

                /*
                 * Dynamic links can be built with any URL prefix registered on
                 *
                 * https://console.firebase.google.com/u/1/project/_/durablelinks/links/
                 *
                 * You can define one of those domains as the default for new Dynamic
                 * Links created within your project.
                 *
                 * The value must be a valid domain, for example,
                 * https://example.page.link
                 */

                'default_domain' => env('FIREBASE_DYNAMIC_LINKS_DEFAULT_DOMAIN'),
            ],

            /*
             * ------------------------------------------------------------------------
             * Firebase Cloud Storage
             * ------------------------------------------------------------------------
             */

            'storage' => [

                /*
                 * Your project's default storage bucket usually uses the project ID
                 * as its name. If you have multiple storage buckets and want to
                 * use another one as the default for your application, you can
                 * override it here.
                 */

                'default_bucket' => env('FIREBASE_STORAGE_DEFAULT_BUCKET'),

            ],

            /*
             * ------------------------------------------------------------------------
             * Caching
             * ------------------------------------------------------------------------
             *
             * The Firebase Admin SDK can cache some data returned from the Firebase
             * API, for example Google's public keys used to verify ID tokens.
             *
             */

            'cache_store' => env('FIREBASE_CACHE_STORE', 'file'),

            /*
             * ------------------------------------------------------------------------
             * Logging
             * ------------------------------------------------------------------------
             *
             * Enable logging of HTTP interaction for insights and/or debugging.
             *
             * Log channels are defined in config/logging.php
             *
             * Successful HTTP messages are logged with the log level 'info'.
             * Failed HTTP messages are logged with the log level 'notice'.
             *
             * Note: Using the same channel for simple and debug logs will result in
             * two entries per request and response.
             */

            'logging' => [
                'http_log_channel' => env('FIREBASE_HTTP_LOG_CHANNEL'),
                'http_debug_log_channel' => env('FIREBASE_HTTP_DEBUG_LOG_CHANNEL'),
            ],

            /*
             * ------------------------------------------------------------------------
             * HTTP Client Options
             * ------------------------------------------------------------------------
             *
             * Behavior of the HTTP Client performing the API requests
             */

            'http_client_options' => [

                /*
                 * Use a proxy that all API requests should be passed through.
                 * (default: none)
                 */

                'proxy' => env('FIREBASE_HTTP_CLIENT_PROXY'),

                /*
                 * Set the maximum amount of seconds (float) that can pass before
                 * a request is considered timed out
                 *
                 * The default time out can be reviewed at
                 * https://github.com/kreait/firebase-php/blob/6.x/src/Firebase/Http/HttpClientOptions.php
                 */

                'timeout' => env('FIREBASE_HTTP_CLIENT_TIMEOUT'),

                'guzzle_middlewares' => [],
            ],
        ],
    ],
];