#!/usr/bin/python
# -*- coding: UTF-8 -*-
import os;
import time;  
import sys;
import re;

print ("avoidCache.py is running, waiting...")
def systemTime():
    return '?version=' + bytes(time.strftime("%Y-%m-%d-%H-%M", time.localtime()))
 
#将文件夹内的文件名读进列表
#filepath = os.path.dirname(os.getcwd())
filepath = os.getcwd()
print filepath
filepath = filepath + '/image/jrd-resource/resource/webrc/www'
filename_list= os.listdir(filepath)

h1=[]
h2=[]
h3=[]
h4=[]

def GetFileNameAndExt(filename):
 (filepath,tempfilename) = os.path.split(filename);
 (shotname,extension) = os.path.splitext(tempfilename);
 return extension

def htmlnames():
    for filename in filename_list:#依次读入列表中的内容
        #print filename
        if GetFileNameAndExt(filename)== '.html':
           h1.append(filepath +'/'+filename)

        if GetFileNameAndExt(filename)== '':
           filename_path = filepath + '/'+ filename
           filename_list2 = os.listdir(filename_path)
           for x in filename_list2:
               if GetFileNameAndExt(x) ==".html":
                  h2.append(filepath +'/'+filename +'/'+ x)
    return h1+h2

def readFileNames():
    for filename in filename_list:#依次读入列表中的内容
        #print filename
        if (GetFileNameAndExt(filename)== '.js') or (GetFileNameAndExt(filename)== '.html'):
          h3.append(filepath +'/'+filename)

        if GetFileNameAndExt(filename)== '':
          filename_path = filepath + '/'+ filename
          filename_list2 = os.listdir(filename_path)
          for x in filename_list2:
            if (GetFileNameAndExt(x)== '.js') or (GetFileNameAndExt(x)== '.html'):
              h4.append(filepath +'/'+filename +'/'+ x)
    return h3+h4

def alter2(file,old_str,new_str):
    with open(file, "r") as f1,open("%s.bak" % file, "w") as f2:
        for line in f1:
            f2.write(re.sub(old_str,new_str,line))
    os.remove(file)
    os.rename("%s.bak" % file, file)

def startFilter():
    for htmlname in htmlnames():
        #双引号处理
        alter2(htmlname, r'(\.js\s*\"\s*\>)','.js' + systemTime() +'">')
        alter2(htmlname, r'(\.css\s*\"\s*\>)','.css'+ systemTime() +'">')
       # 单引号解决方案
        alter2(htmlname, r'(\.js\s*\'\s*\>)','.js' + systemTime() +"'>")
        alter2(htmlname, r'(\.css\s*\'\s*\>)','.css'+ systemTime() +"'>")
      #解决已经生成版本号的问题，再次更新会产生新的时间版本号
        alter2(htmlname, r'(\.js\?version\=\d{4}\-\d{2}\-\d{2}\-\d{2}\-\d{2})','.js' + systemTime())
        alter2(htmlname, r'(\.css\?version\=\d{4}\-\d{2}\-\d{2}\-\d{2}\-\d{2})','.css'+ systemTime())
      #兼容格式如：d=20171227类型的代码
        alter2(htmlname, r'(\.js\?d\=\d{6,12})','.js' + systemTime())
        alter2(htmlname, r'(\.css\?d\=\d{6,12})','.css'+ systemTime()) 

def defaultFilter():
    for filename in readFileNames():
      alter2(filename, r'default.html#','default.html' + systemTime() +"#")

if __name__ == "__main__":
    startFilter()
    defaultFilter()
    print("avoidCache.py is being run successfully!")
else:
    print("avoidCache.py is being run failed!")   
















